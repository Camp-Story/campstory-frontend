import { PATH } from "@constants/path";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div>
          <h2 className="mt-[100px] text-center text-[32px] font-bold text-primary-500">
            CAMPSTORY
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[15px] font-bold text-gray-scale-300">
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-[15px] font-bold text-gray-scale-300"
                >
                  비밀번호
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-bold text-white shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                로그인
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-5 space-x-4">
            <Link to={PATH.signUp} className="text-sm/6 text-gray-scale-400 hover:font-semibold">
              아이디 찾기
            </Link>
            <Link to={PATH.signUp} className="text-sm/6 text-gray-scale-400 hover:font-semibold">
              비밀번호 찾기
            </Link>
            <Link
              to={PATH.signUp}
              className="text-sm/6 text-primary-500 font-semibold hover:font-bold"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
