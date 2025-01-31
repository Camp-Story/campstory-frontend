import { useState } from "react";
import axios from "axios";
import { apiInstance } from "@utils/axiosInstance";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    phone: "",
    fullName: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = apiInstance.post("/signup", {
        email: formData.email,
        password: formData.password,
        birthDate: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
        phone: formData.phone,
        fullName: formData.fullName,
      });
      setSuccess(true);
      // 회원가입 성공 시 추가 처리 (예: 페이지 이동)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("회원가입 실패:", err.response?.data || err.message);
      } else if (err instanceof Error) {
        console.error("에러 메시지:", err.message);
      } else {
        console.error("알 수 없는 에러 발생");
      }
    }

    // err = err.mesage;
    //   setError(err.response?.data?.message || "회원가입에 실패했습니다.");
    // }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-16 mb-8">
            <div className="text-[20px] font-bold text-gray-scale-400">필수 정보 입력</div>
            <div className="text-[15px] font-light text-gray-scale-300">
              가입을 위해 필수 정보를 입력해주세요.
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-[15px] font-bold text-gray-scale-300">
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  minLength={5}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-[15px] font-bold text-gray-scale-300">
                비밀번호
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={4}
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-[15px] font-bold text-gray-scale-300"
              >
                비밀번호 확인
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={4}
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label className="block text-[15px] font-bold text-gray-scale-300">생년월일</label>
              <div className="flex space-x-3 mt-2">
                <input
                  id="birthYear"
                  name="birthYear"
                  type="number"
                  placeholder="연도"
                  value={formData.birthYear}
                  onChange={handleChange}
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
                <input
                  id="birthMonth"
                  name="birthMonth"
                  type="number"
                  placeholder="월"
                  value={formData.birthMonth}
                  onChange={handleChange}
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
                <input
                  id="birthDay"
                  name="birthDay"
                  type="number"
                  placeholder="일"
                  value={formData.birthDay}
                  onChange={handleChange}
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-[15px] font-bold text-gray-scale-300">
                휴대폰 번호
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="fullName" className="block text-[15px] font-bold text-gray-scale-300">
                이름
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-500 text-sm">회원가입에 성공했습니다!</div>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-bold text-white shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                회원가입
              </button>
            </div>
            <br /> <br />
          </form>
        </div>
      </div>
    </>
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
