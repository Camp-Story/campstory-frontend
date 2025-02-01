import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const goCampingInstance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/GoCamping",
  params: {
    MobileOS: "ETC",
    MobileApp: "campstory",
    serviceKey: import.meta.env.VITE_GO_CAMPING_API_KEY,
    _type: "json",
  },
});

const tourApiInstance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  params: {
    MobileOS: "ETC",
    MobileApp: "campstory",
    serviceKey: import.meta.env.VITE_TOUR_API_KEY,
    _type: "json",
  },
});

const weatherApiInstance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: {
    serviceKey: import.meta.env.VITE_WEATHER_API_KEY,
    dataType: "json",
  },
});

const naverApiInstance = axios.create({
  baseURL: "/v1/search",
  headers: {
    "Content-Type": "application/json",
    "X-Naver-Client-Id": import.meta.env.VITE_NAVER_API_ID_KEY,
    "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_SECRET_KEY,
  },
});

export { apiInstance, goCampingInstance, tourApiInstance, naverApiInstance, weatherApiInstance };
