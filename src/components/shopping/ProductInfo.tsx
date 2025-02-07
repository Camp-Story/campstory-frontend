import SharingButton from "@components/detail/SharingButton";
import { NaverProductResponse } from "types/NaverShoppingResponse";

export default function ProductInfo({ product }: { product: NaverProductResponse }) {
  const { brand, mallName, title, image, link, lprice, hprice } = product;

  const calculateDiscountRate = (hprice: string, lprice: string) => {
    const highPrice = Number(hprice);
    const lowPrice = Number(lprice);
    const discountRate = ((highPrice - lowPrice) / highPrice) * 100;
    return discountRate.toFixed(0) + "%";
  };

  return (
    <section className="flex justify-between mb-20 gap-16">
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
      <article className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="w-[500px]">
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
            <SharingButton />
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
