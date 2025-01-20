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

export { apiInstance, goCampingInstance, tourApiInstance };
