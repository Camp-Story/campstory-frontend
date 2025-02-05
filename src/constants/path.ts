// TODO: 임의로 정한 경로이기 떄문에 회의 후 정 계획
export const PATH = {
  home: "/",

  // auth
  signUp: "/sign-up",
  login: "/login",
  logout: "/logout",
  oauthRedirect: "/oauth-redirect",
  mypage: "/mypage",
  information: "/mypage/information",
  reservedList: "/mypage/reserved-list",
  bookmark: "/mypage/bookmark",
  bookmarkDetail: (type: string) => `/mypage/bookmark/${type}`,
  bookmarkDetailPath: "/mypage/bookmark/:type",
  activities: "/mypage/activities",

  // capming
  camping: "/camping",
  campingSearch: "/camping/search",
  campingInfo: (id: string) => `/camping/information/${id}`,
  campingInfoPath: "/camping/information/:id",
  campingReservation: (id: string) => `/camping/reservation/${id}`,
  campingReservationPath: "/camping/reservation/:id",

  // event
  event: "/event",
  eventSearch: "/event/search",
  eventInfo: (id: string) => `/event/information/${id}`,
  eventInfoPath: "/event/information/:id",

  // restaurant
  restaurant: "/restaurant",
  restaurantSearch: "/restaurant/search",
  restaurantInfo: (id: string) => `/restaurant/information/${id}`,
  restaurantInfoPath: "/restaurant/information/:id",

  // shopping
  shopping: "/shopping",
  shoppingSearch: "/shopping/search",
  shoppingInfo: (id: string) => `/shopping/information/${id}`,
  shoppingInfoPath: "/shopping/information/:id",

  // community
  community: "/community",
  communityPost: (id: string) => `/community/${id}`,
  communityPostPath: "/community/:id",
  communityCreate: "/community/create",
  communityModify: (id: string) => `/community/modify/${id}`,
  communityModifyPath: "/community/modify/:id",

  question: "/question",
  questionPost: (id: string) => `/question/${id}`,
  questionPostPath: "/question/:id",
  questionCreate: "/question/create",
  questionModify: (id: string) => `/question/modify/${id}`,
  questionModifyPath: "/question/modify/:id",
};
