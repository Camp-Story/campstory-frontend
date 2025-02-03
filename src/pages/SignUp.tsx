import axios from "axios";
import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";
import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import FormValidator from "@utils/FormValidator";
import InputField from "@components/ui/InputField";
import AuthResponse from "types/AuthResponse";

const initializeFormData = () => ({
  email: "",
  password: "",
  confirmPassword: "",
  birthYear: "",
  birthMonth: "",
  birthDay: "",
  phone: "",
  fullName: "",
});

const inputClassName = (error?: string) =>
  `block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 ${
    error ? "outline-red-500" : "outline-gray-300"
  } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6`;

export default function SignUp() {
  const navigate = useNavigate();
  const formValidator = useMemo(() => new FormValidator(), []);

  const {
    formData,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    validateField,
    handleChange,
    validateForm,
  } = useForm({
    initialFormData: initializeFormData(),
    validator: formValidator,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const birthDate = `${formData.birthYear}-${String(formData.birthMonth).padStart(2, "0")}-${String(formData.birthDay).padStart(2, "0")}`;

      const response = await apiInstance.post<AuthResponse>("/signup", {
        email: formData.email,
        password: formData.password,
        birthDate,
        phone: formData.phone.replace(/-/g, ""),
        fullName: formData.fullName,
      });

      if (response.status === 200 || response.status === 201) {
        alert("회원가입이 완료되었습니다.");
        navigate(PATH.login);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setSubmitError(err.response?.data || "회원가입 중 오류가 발생했습니다.");
      } else {
        setSubmitError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    const newErrors = {
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword,
        formData.password,
      ),
    };
    setErrors((prev) => ({ ...prev, ...newErrors }));
  }, [formData.confirmPassword, formData.password, validateField, setErrors]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">
      <div className="mt-5 mb-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-16 mb-8">
          <h2 className="text-title font-bold text-gray-scale-400">필수 정보 입력</h2>
          <p className="text-body1 text-gray-scale-300">가입을 위해 필수 정보를 입력해주세요.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <InputField
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <InputField
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          <InputField
            label="비밀번호 확인"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
          />

          <div>
            <label className="block text-body1 font-bold text-gray-scale-300">생년월일</label>
            <div className="flex space-x-3 mt-2">
              <div className="w-1/3">
                <input
                  id="birthYear"
                  name="birthYear"
                  type="number"
                  placeholder="연도"
                  value={formData.birthYear}
                  onChange={handleChange}
                  className={inputClassName(errors.birthYear)}
                />
              </div>
              <div className="w-1/3">
                <input
                  id="birthMonth"
                  name="birthMonth"
                  type="number"
                  placeholder="월"
                  min="1"
                  max="12"
                  value={formData.birthMonth}
                  onChange={handleChange}
                  className={inputClassName(errors.birthMonth)}
                />
              </div>
              <div className="w-1/3">
                <input
                  id="birthDay"
                  name="birthDay"
                  type="number"
                  placeholder="일"
                  min="1"
                  max="31"
                  value={formData.birthDay}
                  onChange={handleChange}
                  className={inputClassName(errors.birthDay)}
                />
              </div>
            </div>
            {(errors.birthYear || errors.birthMonth || errors.birthDay) && (
              <p className="mt-1 text-sm text-red-500">올바른 생년월일을 입력해주세요.</p>
            )}
          </div>

          <InputField
            label="휴대폰 번호"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="010-0000-0000"
            required
          />
          <InputField
            label="이름"
            type="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full justify-center rounded-md px-3 py-2 text-sm/6 font-bold text-white shadow-sm 
              ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-500 hover:bg-primary-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              }`}
          >
            {isSubmitting ? "처리중..." : "회원가입"}
          </button>
        </form>
        {submitError && <p className="mt-4 text-sm text-red-500">{submitError}</p>}
      </div>
    </div>
  );
}

// // import axios from "axios";
// // import { useState } from "react";

// // export default function AxiosPost() {
// //   const [message, setMessage] = useState<string>("");
// //   const onAction = (formData: FormData) => {
// //     const createMember = async () => {
// //       try {
// //         const formJson = Object.fromEntries(formData.entries());
// //         const response = await axios.post("http://localhost:4000/members", formJson);
// //         console.log("result :", response);
// //         if (response.status === 201) {
// //           setMessage("멤버 등록에 성공 하였습니다." + " id : " + response.data.id);
// //         } else {
// //           setMessage("멤버 등록에 실패 하였습니다.");
// //         }
// //       } catch (error) {
// //         setMessage("멤버 등록에 실패 하였습니다.");
// //         console.log(error);
// //       }
// //     }
// //     createMember();

// //   }
// // }

// export default function SignUp() {

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center">
//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="mt-16 mb-8">
//             <div className="text-[20px] font-bold text-gray-scale-400">필수 정보 입력</div>
//             <div className="text-[15px] font-light text-gray-scale-300">
//               가입을 위해 필수 정보를 입력해주세요.
//             </div>
//           </div>
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-[15px] font-bold text-gray-scale-300">
//                 이메일
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   minLength={5}
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-[15px] font-bold text-gray-scale-300"
//                 >
//                   비밀번호
//                 </label>
//                 <div className="text-sm"></div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   minLength={4}
//                   defaultValue=""
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-[15px] font-bold text-gray-scale-300"
//                 >
//                   비밀번호 확인
//                 </label>
//                 <div className="text-sm"></div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="confirm-password"
//                   name="confirm-password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   minLength={4}
//                   defaultValue=""
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label className="block text-[15px] font-bold text-gray-scale-300">생년월일</label>
//                 <div className="text-sm"></div>
//               </div>
//               <div className="flex space-x-3 mt-2">
//                 <input
//                   id="birth-year"
//                   name="birth-year"
//                   type="number"
//                   placeholder="연도"
//                   autoComplete="bday-year"
//                   className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//                 <input
//                   id="birth-month"
//                   name="birth-month"
//                   type="number"
//                   placeholder="월"
//                   autoComplete="bday-month"
//                   className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//                 <input
//                   id="birth-day"
//                   name="birth-day"
//                   type="number"
//                   placeholder="일"
//                   autoComplete="bday-day"
//                   className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-[15px] font-bold text-gray-scale-300"
//                 >
//                   휴대폰 번호
//                 </label>
//                 <div className="text-sm"></div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="text"
//                   autoComplete="phone"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-[15px] font-bold text-gray-scale-300"
//                 >
//                   이름
//                 </label>
//                 <div className="text-sm"></div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   autoComplete="name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-bold text-white shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
//               >
//                 회원가입
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
