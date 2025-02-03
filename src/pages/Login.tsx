import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";
import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import FormValidator from "@utils/FormValidator";
import InputField from "@components/ui/InputField";
import AuthResponse from "types/AuthResponse";
import { useMemo } from "react";

const TOKEN_EXPIRY_HOURS = 1;

function setAuthToken(token: string): void {
  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + TOKEN_EXPIRY_HOURS);
  localStorage.setItem("expiration", expiration.toISOString());
}

const initializeFormData = () => ({
  email: "",
  password: "",
});

export default function Login() {
  const navigate = useNavigate();
  const formValidator = useMemo(() => new FormValidator(), []);

  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
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
      const response = await apiInstance.post<AuthResponse>("/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        alert("로그인 성공!");

        const resData = response.data;
        setAuthToken(resData.token);

        navigate(PATH.home);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setSubmitError(err.response?.data || "로그인 중 오류가 발생했습니다.");
      } else {
        setSubmitError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">
      <div className="mt-[100px] flex flex-col items-center">
        <h2 className="text-title font-impact text-primary-500">CAMPSTORY</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full justify-center rounded-md px-3 py-2 text-sm/6 font-bold text-white shadow-sm 
              ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-500 hover:bg-primary-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-primary-500"
              }`}
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </button>
        </form>
        {submitError && <p className="mt-4 text-sm text-red-500">{submitError}</p>}

        <div className="flex justify-center mt-5 gap-5">
          <button
            // to={PATH.findId}
            className="text-sm/6 text-gray-scale-400 hover:font-semibold"
          >
            아이디 찾기
          </button>
          <button
            // to={PATH.findPassword}
            className="text-sm/6 text-gray-scale-400 hover:font-semibold"
          >
            비밀번호 찾기
          </button>
          <Link
            to={PATH.signUp}
            className="text-sm/6 text-primary-500 font-semibold hover:font-bold"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

// import { PATH } from "@constants/path";
// import axios from "axios";
// import { Link } from "react-router";

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get("http://13.209.75.182:5001/login");
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // fetchData();

// export default function Login() {
//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center">
//         <div>
//           <h2 className="mt-[100px] text-center text-[32px] font-bold text-primary-500">
//             CAMPSTORY
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-[15px] font-bold text-gray-scale-300">
//                 아이디
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
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
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-bold text-white shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
//               >
//                 로그인
//               </button>
//             </div>
//           </form>
//           <div className="flex justify-center mt-5 space-x-4">
//             <Link to={PATH.signUp} className="text-sm/6 text-gray-scale-400 hover:font-semibold">
//               아이디 찾기
//             </Link>
//             <Link to={PATH.signUp} className="text-sm/6 text-gray-scale-400 hover:font-semibold">
//               비밀번호 찾기
//             </Link>
//             <Link
//               to={PATH.signUp}
//               className="text-sm/6 text-primary-500 font-semibold hover:font-bold"
//             >
//               회원가입
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
