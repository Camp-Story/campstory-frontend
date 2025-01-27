import { NaverProductResponse } from "@types/NaverShoppingResponse";

export default function ProductInfo({ product }: { product: NaverProductResponse }) {
  const { brand, mallName, title, image, link, lprice, hprice } = product;

  const calculateDiscountRate = (hprice: string, lprice: string) => {
    const highPrice = Number(hprice);
    const lowPrice = Number(lprice);
    const discountRate = ((highPrice - lowPrice) / highPrice) * 100;
    return discountRate.toFixed(0) + "%";
  };

  return (
    <section className="flex justify-between">
      <article className="w-[500px] h-[500px] border-2 rounded-xl bg-gray-scale-100 overflow-hidden">
        <img
          src={
            image ||
            "https://shopping-phinf.pstatic.net/main_3662609/36626094620.20221219153401.jpg"
          }
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </article>
      <article className="w-[550px] flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="w-[400px]">
            <span className="text-sub-title text-gray-scale-300 mb-2">{brand || mallName}</span>
            <h4 className="text-title mb-4">{title.replace(/<\/?[^>]+(>|$)/g, "")}</h4>
            <span className="text-title font-bold">
              {hprice && (
                <span className="text-secondary-300 mr-2">
                  {calculateDiscountRate(hprice, lprice)}
                </span>
              )}
              {Intl.NumberFormat("ko-KR").format(Number(lprice))}원
            </span>
          </div>
          <div>
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
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="py-3 bg-primary-500 rounded text-sub-title text-gray-scale-0 text-center"
        >
          구매 링크
        </a>
      </article>
    </section>
  );
}
