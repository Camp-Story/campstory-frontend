interface RecommendCardProps {
  src: string;
  brand: string;
  productName: string;
  discount: number;
  price: string;
}
// {src, brand, productName, discount, price}:RecommendCardProps

export default function RecommendCard({
  src,
  brand,
  productName,
  discount,
  price,
}: RecommendCardProps) {
  return (
    <div className="flex gap-6 justify-between items-center w-[610px] h-[280px] bg-gray-scale-0 drop-shadow-custom rounded p-4">
      <img src={src} alt="productImg" className="w-[240px] h-[240px] rounded" />
      <div className="relative w-[360px] h-[240px] ">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-body2 text-gray-scale-300">{brand}</div>
            <div className="text-body1 font-bold text-gray-scale-400">{productName}</div>
          </div>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // onClick={handleClickBookmark}
            >
              <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9999 8.38854C15.8749 7.49946 17.0144 7 18.2039 7C19.4884 7 20.7146 7.58238 21.6124 8.60881C22.5038 9.62713 23 10.9998 23 12.4254C23 13.851 22.5037 15.2238 21.6124 16.242C21.0197 16.9194 20.4279 17.6122 19.8331 18.3086C18.6249 19.723 17.4038 21.1526 16.1353 22.4995L16.1324 22.5026C15.4782 23.187 14.4422 23.1621 13.816 22.4465L8.38716 16.2419C6.53761 14.1281 6.53761 10.7227 8.38716 8.6089C10.1971 6.54038 13.1115 6.46693 14.9999 8.38854Z"
                fill="#B4B4B4"
                // fill={bookmarked ? "#DC3644" : "#B4B4B4"}
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-2 absolute bottom-0 right-0 text-sub-title font-bold">
          <div className="text-sub-title font-bold text-secondary-500">{discount}%</div>
          <div className="text-sub-title font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
}
