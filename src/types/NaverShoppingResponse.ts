export interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
  productId: string;
  productType: string;
  brand: string;
  maker: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
}

export interface NaverSearchResponse {
  items: NaverProductResponse[];
}

export interface ProductCardProps {
  product: NaverProductResponse;
  bookmarked?: boolean;
  handleClickBookmark?: () => void;
  useNativeImage?: boolean;
}
