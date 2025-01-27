interface ProductCardProps {
  id: string;
  title: string;
  mallName: string;
  image?: string;
  hprice: string;
  lprice: string;
  bookmarked: boolean;
  handleClickBookmark: () => void;
}

export default ProductCardProps;
