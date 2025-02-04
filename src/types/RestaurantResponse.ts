interface RestaurantDetailData {
  contentid: string;
  originimgurl: string;
  title: string;
  tel: string;
  cat3: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  overview: string;
  homepage: string;
  addr1: string;
  addr2: string;
  opentimefood: string;
  parkingfood: string;
  firstmenu: string;
  infocenterfood: string;
  restdatefood: string;
}

interface NearbyRestaurantResponse {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode: string;
}

export type { RestaurantDetailData, NearbyRestaurantResponse };
