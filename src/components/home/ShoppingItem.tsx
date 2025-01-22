import { Link } from "react-router";
import ProductItemType from "types/ProductItem";

export default function ShoppingItem({ name, discount, price, image, brand }: ProductItemType) {
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
