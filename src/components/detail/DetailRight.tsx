interface DetailRightProps {
  category: string;
  title: string;
  address: string;
  phone: string;
  contenttypeid: string;
  bookmarked: boolean;
  overview: string;
  opentimefood?: string;
  firstmenu?: string;
  infocenterfood?: string;
  parkingfood?: string;
  restdatefood?: string;
  kidsfacility?: string;
  discountinfo?: string;
}

export default function DetailRight({
  category,
  title,
  address,
  phone,
  contenttypeid,
  bookmarked = false,
  overview,
  opentimefood,
  firstmenu,
  parkingfood,
  restdatefood,
}: DetailRightProps) {
  return (
    <article className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <div className="">
              <span className="text-sub-title text-gray-scale-300">{category}</span>
              <h3 className="text-highlight">{title}</h3>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-gray-scale-300">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.63478 15.1998C6.63478 15.1998 12.2696 10.1911 12.2696 6.43459C12.2696 3.32258 9.74679 0.799805 6.63478 0.799805C3.52278 0.799805 1 3.32258 1 6.43459C1 10.1911 6.63478 15.1998 6.63478 15.1998Z"
                    stroke="#676767"
                  />
                  <path
                    d="M8.43501 6.19992C8.43501 7.19403 7.62913 7.99992 6.63501 7.99992C5.6409 7.99992 4.83501 7.19403 4.83501 6.19992C4.83501 5.20581 5.6409 4.39992 6.63501 4.39992C7.62913 4.39992 8.43501 5.20581 8.43501 6.19992Z"
                    stroke="#676767"
                  />
                </svg>
                {address}
              </span>
              <span className="flex items-center gap-2 text-gray-scale-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6669 11.2797V13.2797C14.6677 13.4654 14.6297 13.6492 14.5553 13.8193C14.4809 13.9894 14.3718 14.1421 14.235 14.2676C14.0982 14.3932 13.9367 14.4887 13.7608 14.5482C13.5849 14.6077 13.3985 14.6298 13.2136 14.6131C11.1622 14.3902 9.19161 13.6892 7.46028 12.5664C5.8495 11.5428 4.48384 10.1772 3.46028 8.56641C2.3336 6.82721 1.63244 4.84707 1.41361 2.78641C1.39695 2.60205 1.41886 2.41625 1.47795 2.24082C1.53703 2.0654 1.63199 1.9042 1.75679 1.76749C1.88159 1.63077 2.03348 1.52155 2.20281 1.44675C2.37213 1.37196 2.55517 1.33325 2.74028 1.33307H4.74028C5.06382 1.32989 5.37748 1.44446 5.62279 1.65543C5.8681 1.8664 6.02833 2.15937 6.07361 2.47974C6.15803 3.11978 6.31458 3.74822 6.54028 4.35307C6.62998 4.59169 6.64939 4.85102 6.59622 5.10033C6.54305 5.34964 6.41952 5.57848 6.24028 5.75974L5.39361 6.60641C6.34265 8.27544 7.72458 9.65737 9.39361 10.6064L10.2403 9.75974C10.4215 9.5805 10.6504 9.45697 10.8997 9.4038C11.149 9.35063 11.4083 9.37004 11.6469 9.45974C12.2518 9.68544 12.8802 9.84199 13.5203 9.92641C13.8441 9.97209 14.1399 10.1352 14.3513 10.3847C14.5627 10.6343 14.6751 10.9528 14.6669 11.2797Z"
                    stroke="#676767"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {phone}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-end gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24.5" cy="24.5" r="24.5" fill="#EAEAEA" />
                <path
                  d="M30.75 34.9167C32.4759 34.9167 33.875 33.5177 33.875 31.7917C33.875 30.0658 32.4759 28.6667 30.75 28.6667C29.0241 28.6667 27.625 30.0658 27.625 31.7917C27.625 33.5177 29.0241 34.9167 30.75 34.9167Z"
                  stroke="#B4B4B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.75 20.3333C32.4759 20.3333 33.875 18.9341 33.875 17.2083C33.875 15.4824 32.4759 14.0833 30.75 14.0833C29.0241 14.0833 27.625 15.4824 27.625 17.2083C27.625 18.9341 29.0241 20.3333 30.75 20.3333Z"
                  stroke="#B4B4B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.25 27.625C19.9759 27.625 21.375 26.2259 21.375 24.5C21.375 22.7741 19.9759 21.375 18.25 21.375C16.5241 21.375 15.125 22.7741 15.125 24.5C15.125 26.2259 16.5241 27.625 18.25 27.625Z"
                  stroke="#B4B4B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M28.1452 18.7708L20.8535 22.9374" stroke="#B4B4B4" strokeWidth="2" />
                <path d="M20.8535 26.0625L28.1452 30.2292" stroke="#B4B4B4" strokeWidth="2" />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="#EAEAEA" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9999 8.38854C15.8749 7.49946 17.0144 7 18.2039 7C19.4884 7 20.7146 7.58238 21.6124 8.60881C22.5038 9.62713 23 10.9998 23 12.4254C23 13.851 22.5037 15.2238 21.6124 16.242C21.0197 16.9194 20.4279 17.6122 19.8331 18.3086C18.6249 19.723 17.4038 21.1526 16.1353 22.4995L16.1324 22.5026C15.4782 23.187 14.4422 23.1621 13.816 22.4465L8.38716 16.2419C6.53761 14.1281 6.53761 10.7227 8.38716 8.6089C10.1971 6.54038 13.1115 6.46693 14.9999 8.38854Z"
                  fill={bookmarked ? "#DC3644" : "#B4B4B4"}
                />
              </svg>
            </div>
          </div>
        </div>
        {contenttypeid === "15" && (
          <div>
            <h3 className="text-[26px] font-bold mb-3">기본 정보</h3>
            <ul>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">행사기간</strong>2025.01.14 -
                  2025.01.20
                </span>
              </li>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">행사장소</strong>
                  산57 감악산 정상
                </span>
              </li>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">홈페이지</strong>www.campstory.com
                </span>
              </li>
            </ul>
          </div>
        )}
        {contenttypeid === "39" && (
          <div>
            <h3 className="text-[26px] font-bold mb-3">기본 정보</h3>
            <ul>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">대표메뉴</strong>
                  {firstmenu}
                </span>
              </li>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">오픈시간</strong>
                  {opentimefood}
                </span>
              </li>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">휴무일</strong>
                  {restdatefood}
                </span>
              </li>
              <li className="mb-3">
                <span className="block text-body1 text-gray-scale-400">
                  <strong className="mr-4 text-gray-scale-500">주차</strong>
                  {parkingfood}
                </span>
              </li>
            </ul>
          </div>
        )}
        <div>
          <h3 className="text-[26px] font-bold mb-2 ">개요</h3>
          <p className="text-body1 text-gray-scale-400 overflow-hidden">{overview}</p>
        </div>
      </div>
      <div className="w-full h-[318px] bg-gray-scale-100 rounded-xl overflow-hidden self-end">
        <img src="/images/map-mid.png" alt="[임시] 지도 이미지" className="w-full object-cover" />
      </div>
    </article>
  );
}
