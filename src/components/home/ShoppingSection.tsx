import ProductItemType from "types/ProductItem";
import ShoppingItem from "@components/home/ShoppingItem";

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

export default function ShoppingSection() {
  return (
    <article className="col-start-6 -col-end-1">
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
    </article>
  );
}
