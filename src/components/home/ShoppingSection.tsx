import { PATH } from "@constants/path";
import { Link } from "react-router";
import ProductItemType from "types/ProductItem";

const DUMMY_PRODUCTS: ProductItemType[] = [
  {
    name: "제네스 미니 쉘터",
    discount: "18",
    price: "330,000",
    image: "/images/main/main-festival-left.png",
    brand: "위오",
  },
  {
    name: "기절 침낭 + 패우치",
    price: "69,000",
    image: "/images/main/main-festival-left.png",
    brand: "홈랩",
  },
  {
    name: "캠핑 불멍 화로대",
    discount: "16",
    price: "24,400",
    image: "/images/main/main-festival-left.png",
    brand: "알래스카블랙",
  },
];

function ShoppingItem({ name, discount, price, image, brand }: ProductItemType) {
  return (
    <div className="relative flex-1 h-[492px] bg-gray-scale-100 rounded-xl overflow-hidden">
      <img src={image} alt="캠핑 배경" className="h-[492px] object-cover" />
      <div className="absolute inset-0 w-full bg-gradient-to-b from-gray-scale-500 to-gray-scale-0 opacity-50"></div>
      <Link to="/" className="absolute inset-0 p-7 flex flex-col text-gray-scale-0">
        <span className="text-body1 text-gray-scale-200 mb-1">{brand}</span>
        <h4 className="text-sub-title mb-2">{name}</h4>
        <span className="text-sub-title">
          {discount && <strong className="text-secondary-300 mr-2">{discount}%</strong>}
          {price}원
        </span>
      </Link>
    </div>
  );
}

export default function ShoppingSection() {
  return (
    <article className="relative col-start-6 -col-end-1">
      <h2 className="text-highlight font-impact">쇼핑은 필수</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        캠핑은 장비빨! A부터 Z까지 모두 준비하세요.
      </p>
      <div className="flex gap-[10px]">
        {DUMMY_PRODUCTS.map((item) => (
          <ShoppingItem
            key={item.name}
            name={item.name}
            discount={item?.discount}
            price={item.price}
            image={item.image}
            brand={item.brand}
          />
        ))}
      </div>
      <Link to={PATH.shoppingSearch} className="absolute top-5 font-bold right-0 text-info-500">
        더보기
      </Link>
    </article>
  );
}
