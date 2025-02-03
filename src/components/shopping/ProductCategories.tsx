import { NaverProductResponse } from "types/NaverShoppingResponse";

export default function ProductCategories({ product }: { product: NaverProductResponse }) {
  return (
    <section>
      <ul className="flex gap-4">
        <li className="w-64 text-center py-3 text-sub-title rounded-full bg-gray-scale-100/50">
          {product.category1}
        </li>
        <li className="w-64 text-center py-3 text-sub-title rounded-full bg-gray-scale-100/50">
          {product.category2}
        </li>
        <li className="w-64 text-center py-3 text-sub-title rounded-full bg-gray-scale-100/50">
          {product.category3}
        </li>
        <li className="w-64 text-center py-3 text-sub-title rounded-full bg-gray-scale-100/50">
          {product.category4}
        </li>
      </ul>
    </section>
  );
}
