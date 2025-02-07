import { PATH } from "@constants/path";
import { useNavigate } from "react-router";
import calculateDiscountRate from "@utils/calculateDiscountRate";
import { ProductCardProps } from "types/NaverShoppingResponse";
import WokerImage from "@components/common/WorkerImage";

export default function ProductCard({
  product,
  bookmarked,
  handleClickBookmark,
  useNativeImage = false,
}: ProductCardProps) {
  const { brand, productId, title, mallName, image, hprice, lprice } = product;

  const navigate = useNavigate();

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.shoppingInfo(id), {
      state: product,
    });
  };

  return (
    <div className="w-56">
      {/* 이미지 영역 */}
      <div
        onClick={() => handleNavigateToDetail(productId)}
        className="block w-full h-56 rounded overflow-hidden border"
      >
        {useNativeImage ? (
          <img
            src={image || "https://placehold.co/230x230?text=CAMP+STORY"}
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        ) : (
          <WokerImage
            imageUrl={image || "https://placehold.co/230x230?text=CAMP+STORY"}
            className="w-full h-full"
            alt="Product Image"
          />
        )}
      </div>
      <div className="mt-3 flex justify-between text-gray-scale-400 text-body2 mb-2">
        {/* 브랜드 및 이름 */}
        <div className="flex flex-col">
          <div className="text-body2 text-gray-scale-300">{brand || mallName}</div>
          <div className="w-44 whitespace-nowrap overflow-hidden text-ellipsis text-body1 font-medium text-gray-scale-400">
            {title.replace(/<\/?[^>]+(>|$)/g, "")}
          </div>
        </div>
        {/* 좋아요 버튼 */}
        <button className="flex justify-center">
          <svg
            width="30"
            height="30"
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
        </button>
      </div>

      {/* 가격 정보 */}
      <div className="flex gap-2 items-center">
        <span className="text-sub-title font-bold">
          {hprice && (
            <span className="text-secondary-500 mr-2">{calculateDiscountRate(hprice, lprice)}</span>
          )}
          {Intl.NumberFormat("ko-KR").format(Number(lprice))}원
        </span>
      </div>
    </div>
  );
}
