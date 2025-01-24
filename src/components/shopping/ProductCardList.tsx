import ProductCard from "./ProductCard";

export default function ProductCardList() {
  const products = [
    {
      id: 1,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item01.png",
    },
    {
      id: 2,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item02.png",
    },
    {
      id: 3,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item03.png",
    },
    {
      id: 4,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item04.png",
    },
    {
      id: 5,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item05.png",
    },
    {
      id: 6,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item06.png",
    },
    {
      id: 7,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item07.png",
    },
    {
      id: 8,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item08.png",
    },
    {
      id: 9,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item09.png",
    },
    {
      id: 10,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item10.png",
    },
    {
      id: 1,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item01.png",
    },
    {
      id: 2,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item02.png",
    },
    {
      id: 3,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item03.png",
    },
    {
      id: 4,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item04.png",
    },
    {
      id: 5,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item05.png",
    },
    {
      id: 6,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item06.png",
    },
    {
      id: 7,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item07.png",
    },
    {
      id: 8,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item08.png",
    },
    {
      id: 9,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item09.png",
    },
    {
      id: 10,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item10.png",
    },
    {
      id: 6,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item06.png",
    },
    {
      id: 7,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item07.png",
    },
    {
      id: 8,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item08.png",
    },
    {
      id: 9,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item09.png",
    },
    {
      id: 10,
      brand: "브랜드 이름",
      name: "시어플러스57 배틀큐 그릴",
      discount: "30%",
      price: "168,000원",
      img: "/images/shopping/shoppingItems/item10.png",
    },
  ];

  return (
    <div className="grid grid-cols-5">
      {" "}
      {products.map((product, idx) => (
        <div className="mt-[40px]">
          <ProductCard
            img={product.img}
            bookmarked={false}
            key={idx}
            brandName={product.brand}
            discount={product.discount}
            productName={product.name}
            price={product.price}
            handleClick={() => alert("click")}
            handleClickBookmark={() => alert("bookmark")}
          />
        </div>
      ))}
    </div>
  );
}
