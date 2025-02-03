import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams, useParams, useLocation } from "react-router-dom";
import { PATH } from "@constants/path";

// 토큰 저장 함수
function setAuthToken(token: string, provider: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("provider", provider);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
}

export default function OAuthRedirect() {
  const { provider: paramProvider } = useParams<{ provider?: string }>(); // URL에서 provider 가져옴
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isAlertShown = useRef(false); // 알림 중복 방지

  const code = searchParams.get("code");
  const provider = paramProvider || location.pathname.split("/").pop(); // provider 자동 감지

  useEffect(() => {
    if (!code) {
      alert("소셜 로그인 실패: 인증 코드 없음");
      navigate(PATH.login);
      return;
    }

    if (!provider) {
      alert("소셜 로그인 실패: provider 정보 없음");
      navigate(PATH.login);
      return;
    }

    if (!isAlertShown.current) {
      // 최초 실행 시에만 실행되도록 설정
      const fakeToken = `fake-token-${Date.now()}`;
      setAuthToken(fakeToken, provider);

      alert(`로그인 성공!`);
      isAlertShown.current = true;

      navigate(PATH.home);
    }
  }, [code, provider, navigate]);

  return <div>소셜 로그인 처리 중...</div>;
}