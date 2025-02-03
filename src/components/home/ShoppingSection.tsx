import { PATH } from "@constants/path";
import useNaverProduct from "@hooks/useNaverProduct";
import { NaverProductResponse } from "types/NaverShoppingResponse";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import calculateDiscountRate from "@utils/calculateDiscountRate";

function ShoppingItem({ product }: { product: NaverProductResponse }) {
  const { brand, productId, title, mallName, image, hprice, lprice } = product;

  const navigate = useNavigate();

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.shoppingInfo(id), {
      state: product,
    });
  };

  return (
    <div
      onClick={() => handleNavigateToDetail(productId)}
      className="relative flex-1 h-[492px] bg-gray-scale-100 rounded-xl overflow-hidden border-2"
    >
      <img src={image} alt="캠핑 배경" className="h-[492px] object-cover" />
      <div className="absolute inset-0 w-full bg-gradient-to-b from-gray-scale-500 to-gray-scale-0 opacity-50"></div>
      <Link to="/" className="absolute inset-0 p-7 flex flex-col text-gray-scale-0">
        <span className="text-body1 text-gray-scale-100 mb-1">{brand || mallName}</span>
        <h4 className="text-sub-title mb-2">{title.replace(/<\/?[^>]+(>|$)/g, "")}</h4>
        <span className="text-sub-title">
          {hprice && (
            <span className="text-secondary-300 mr-2">{calculateDiscountRate(hprice, lprice)}</span>
          )}
          {Intl.NumberFormat("ko-KR").format(Number(lprice))}원
        </span>
      </Link>
    </div>
  );
}

export default function ShoppingSection() {
  const { products, isLoading, errorMessage, fetchNaverProductData } = useNaverProduct(
    "면 텐트",
    3,
  );

  useEffect(() => {
    fetchNaverProductData();
  }, [fetchNaverProductData]);

  return (
    <article className="relative col-start-6 -col-end-1">
      <h2 className="text-highlight font-impact">쇼핑은 필수</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        캠핑은 장비빨! A부터 Z까지 모두 준비하세요.
      </p>
      {isLoading && <p>로딩중...</p>}
      {errorMessage}
      <div className="flex gap-2 justify-between">
        {products.map((product) => (
          <ShoppingItem key={product.productId} product={product} />
        ))}
      </div>
      <Link to={PATH.shoppingSearch} className="absolute top-5 font-bold right-0 text-info-500">
        더보기
      </Link>
    </article>
  );
}
