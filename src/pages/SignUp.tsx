export default function SignUp() {
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
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[15px] font-bold text-gray-scale-300">
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  minLength={5}
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
                  autoComplete="new-password"
                  required
                  minLength={4}
                  defaultValue=""
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
                  비밀번호 확인
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={4}
                  defaultValue=""
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-[15px] font-bold text-gray-scale-300">생년월일</label>
                <div className="text-sm"></div>
              </div>
              <div className="flex space-x-3 mt-2">
                <input
                  id="birth-year"
                  name="birth-year"
                  type="number"
                  placeholder="연도"
                  autoComplete="bday-year"
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
                <input
                  id="birth-month"
                  name="birth-month"
                  type="number"
                  placeholder="월"
                  autoComplete="bday-month"
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
                <input
                  id="birth-day"
                  name="birth-day"
                  type="number"
                  placeholder="일"
                  autoComplete="bday-day"
                  className="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-[15px] font-bold text-gray-scale-300"
                >
                  휴대폰 번호
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
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
                  이름
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-bold text-white shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
