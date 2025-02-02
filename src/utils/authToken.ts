import { PATH } from "@constants/path";
import { redirect } from "react-router-dom";

// 로컬스토리지에 저장된 토큰 유효기간을 가져오는 함수
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  if (!storedExpirationDate) {
    return -1;
  }
  const expirationDate: Date = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

// 로컬스토리지에 저장된 만료되지 않은 토큰을 가져오는 함수
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

// 토큰이 만료되지 않았다면 저장되어 있는 토큰을 반환
export async function tokenLoader() {
  return getAuthToken();
}

// 토큰이 존재하는지 확인 후 존재하지 않다면 로그인으로 리다이렉트
export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect(PATH.login);
  }

  return token;
}
