interface ProductCardProps {
  brandName: string;
  productName: string;
  discount?: string;
  price: string;
  bookmarked: boolean;
  handleClickBookmark: () => void;
  handleClick: () => void;
  img?: string;
}

export default ProductCardProps;
