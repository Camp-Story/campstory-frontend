import { TourApiResponse } from "./common";

interface campingImgListResponse {
  contentId: string;
  serialnum: string;
  imageUrl: string;
  createdtime: string;
  modifiedtime: string;
}

interface campingDataResponse extends TourApiResponse {
  sbrsCl: string;
  posblFcltyCl: string;
  featureNm: string;
  induty: string;
  addr1: string;
  addr2: string;
  mapX: string;
  mapY: string;
  tel: string;
  homepage: string;
  firstImageUrl: string;
  contentId: string;
  facltNm: string;
  lineIntro: string;
  doNm: string;
}

export type { campingDataResponse, campingImgListResponse };
