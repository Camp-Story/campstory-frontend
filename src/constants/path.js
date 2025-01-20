// TODO: 임의로 정한 경로이기 떄문에 회의 후 정 계획
export const PATH = {
  home: "/",

  // auth
  signUp: "/sign-up",
  login: "/login",
  mypage: "/mypage",
  information: "/mypage/information",
  reservedList: "/mypage/reserved-list",
  bookmark: "/mypage/bookmark",
  activities: "/mypage/activites",

  // capming
  camping: "/camping",
  campingSearch: "/camping/search",
  campingInfo: (id) => `/camping/information/${id}`,
  campingReservation: (id) => `/camping/reservation/${id}`,

  // event
  evnet: "/evnet",
  evnetSearch: "/evnet/search",
  evnetInfo: (id) => `/evnet/information/${id}`,

  // restaurant
  restaurant: "/restaurant",
  restaurantSearch: "/restaurant/search",
  restaurantInfo: (id) => `/restaurant/information/${id}`,

  // shopping
  shopping: "/shopping",
  shoppingSearch: "/shopping/search",
  shoppingInfo: (id) => `/shopping/information/${id}`,

  // community
  community: "/community",
  communityPost: (id) => `/community/${id}`,
  communityCreate: "/community/create",
  communityModify: (id) => `/community/modify/${id}`,
  question: "/question",
  questionPost: (id) => `/question/${id}`,
  questionCreate: "/question/create",
  questionModify: (id) => `/question/modify/${id}`,
};
