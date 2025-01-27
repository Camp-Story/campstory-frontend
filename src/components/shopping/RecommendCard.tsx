import { PATH } from "@constants/path";
import { useNavigate } from "react-router";
import calculateDiscountRate from "@utils/calculateDiscountRate";
import { ProductCardProps } from "types/NaverResponse";

export default function RecommendCard({
  product,
  bookmarked,
  handleClickBookmark,
}: ProductCardProps) {
  const { brand, productId, title, mallName, image, hprice, lprice } = product;

  const navigate = useNavigate();

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.shoppingInfo(id), {
      state: product,
    });
  };

  return (
    <div className="flex gap-6 justify-between items-center w-[610px] h-[280px] bg-gray-scale-0 drop-shadow-custom rounded-xl py-5 px-6">
      {/* 이미지 */}
      <div
        onClick={() => handleNavigateToDetail(productId)}
        className="block w-60 h-60 rounded overflow-hidden border"
      >
        <img
          className="w-full h-full"
          src={image || "https://placehold.co/240x240?text=CAMP+STORY"}
          alt="Product Image"
        />
      </div>
      <div className="flex-1 flex flex-col h-60 justify-between">
        <div className="flex justify-between">
          {/* 브랜드 & 상품명 */}
          <div>
            <div className="text-body1 text-gray-scale-300">{brand || mallName}</div>
            <div className="w-56 text-sub-title font-bold text-gray-scale-400">
              {title.replace(/<\/?[^>]+(>|$)/g, "")}
            </div>
          </div>
          {/* 북마크 버튼 */}
          <div>
            <svg
              width="35"
              height="35"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClickBookmark}
            >
              <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9999 8.38854C15.8749 7.49946 17.0144 7 18.2039 7C19.4884 7 20.7146 7.58238 21.6124 8.60881C22.5038 9.62713 23 10.9998 23 12.4254C23 13.851 22.5037 15.2238 21.6124 16.242C21.0197 16.9194 20.4279 17.6122 19.8331 18.3086C18.6249 19.723 17.4038 21.1526 16.1353 22.4995L16.1324 22.5026C15.4782 23.187 14.4422 23.1621 13.816 22.4465L8.38716 16.2419C6.53761 14.1281 6.53761 10.7227 8.38716 8.6089C10.1971 6.54038 13.1115 6.46693 14.9999 8.38854Z"
                fill={bookmarked ? "#DC3644" : "#B4B4B4"}
              />
            </svg>
          </div>
        </div>
        {/* 할인율 & 가격 */}
        <div className="flex justify-end text-sub-title font-bold">
          <span className="text-sub-title font-bold">
            {hprice && (
              <span className="text-secondary-300 mr-2">
                {calculateDiscountRate(hprice, lprice)}
              </span>
            )}
            {Intl.NumberFormat("ko-KR").format(Number(lprice))}원
          </span>
        </div>
      </div>
    </div>
  );
}
