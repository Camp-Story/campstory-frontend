export interface ImageDetails {
  contentid: string; // 컨텐츠 ID
  originimgurl: string; // 원본 이미지 URL
  imgname: string; // 이미지 이름
  smallimageurl: string; // 소형 이미지 URL
  cpyrhtDivCd: string; // 저작권 분류 코드
  serialnum: string; // 이미지 고유 시리얼 번호
}

export interface EventDetails {
  contentid: string; // 컨텐츠 ID
  contenttypeid: string; // 컨텐츠 타입 ID
  sponsor1: string; // 주요 후원사 1
  sponsor1tel: string; // 주요 후원사 1 전화번호
  sponsor2: string; // 주요 후원사 2
  sponsor2tel: string; // 주요 후원사 2 전화번호
  eventenddate: string; // 이벤트 종료 날짜 (YYYYMMDD 형식)
  playtime: string; // 행사 시간
  eventplace: string; // 행사 장소
  eventhomepage: string; // 행사 홈페이지 URL
  agelimit: string; // 연령 제한
  bookingplace: string; // 예매 장소
  placeinfo: string; // 장소 정보
  subevent: string; // 하위 이벤트 정보
  program: string; // 프로그램 정보
  eventstartdate: string; // 이벤트 시작 날짜 (YYYYMMDD 형식)
  usetimefestival: string; // 이용 요금
  discountinfofestival: string; // 할인 정보
  spendtimefestival: string; // 예상 소요 시간
  festivalgrade: string; // 축제 등급
}

export interface CommonDetails {
  contentid: string; // 컨텐츠 ID
  contenttypeid: string; // 컨텐츠 타입 ID
  title: string; // 제목
  createdtime: string; // 생성 시간 (YYYYMMDDHHMMSS 형식)
  modifiedtime: string; // 수정 시간 (YYYYMMDDHHMMSS 형식)
  tel: string; // 전화번호
  telname: string; // 전화명
  homepage: string; // 홈페이지 HTML 링크
  booktour: string; // 투어 예약 정보
  firstimage: string; // 대표 이미지 URL
  firstimage2: string; // 대표 이미지 소형 URL
  cpyrhtDivCd: string; // 저작권 분류 코드
  areacode: string; // 지역 코드
  sigungucode: string; // 시군구 코드
  cat1: string; // 대분류 코드
  cat2: string; // 중분류 코드
  cat3: string; // 소분류 코드
  addr1: string; // 기본 주소
  addr2: string; // 상세 주소
  zipcode: string; // 우편번호
  mapx: string; // 지도 X좌표
  mapy: string; // 지도 Y좌표
  mlevel: string; // 지도 레벨
  overview: string; // 축제 개요
}

export interface EventDetailData {
  title: string;
  contentid: string;
  contenttypeid: string;
  sponsor1: string;
  sponsor1tel: string;
  addr1: string;
  addr2: string;
  homepage: string;
  eventstartdate: string;
  eventenddate: string;
  overview: string;
  images: string[];
}
