import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";
import { PATH } from "@constants/path";
import { apiInstance } from "@utils/axiosInstance";
import FormValidator from "@utils/FormValidator";
import InputField from "@components/ui/InputField";
import AuthResponse from "types/AuthResponse";
import { useMemo } from "react";
import { useAuth } from "@hooks/useAuth/useAuth";

const TOKEN_EXPIRY_HOURS = 1;

function setAuthToken(token: string): void {
  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + TOKEN_EXPIRY_HOURS);
  localStorage.setItem("expiration", expiration.toISOString());
}

const initializeFormData = () => ({
  email: "",
  password: "",
});

export default function Login() {
  const navigate = useNavigate();
  const formValidator = useMemo(() => new FormValidator(), []);
  const { login } = useAuth();

  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    handleChange,
    validateForm,
  } = useForm({
    initialFormData: initializeFormData(),
    validator: formValidator,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await apiInstance.post<AuthResponse>("/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        alert("로그인 성공!");

        const resData = response.data;
        setAuthToken(resData.token);
        login(resData.user);

        navigate(PATH.home);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setSubmitError(err.response?.data || "로그인 중 오류가 발생했습니다.");
      } else {
        setSubmitError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const VITE_KAKAO_API_KEY: string = import.meta.env.VITE_KAKAO_API_KEY;
  const VITE_GOOGLE_CLIENT_ID: string = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const VITE_NAVER_API_ID_KEY: string = import.meta.env.VITE_NAVER_LOGIN_API_ID_KEY;
  const REDIRECT_URI = `${window.location.origin}${PATH.oauthRedirect}`;
  const kakao_link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${VITE_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const google_link = `https://accounts.google.com/o/oauth2/auth?client_id=${VITE_GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid email profile`;
  const naver_link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${VITE_NAVER_API_ID_KEY}&redirect_uri=${REDIRECT_URI}&state=naver`;

  const loginWithKakao = () => {
    window.location.href = kakao_link;
  };

  const loginWithGoolge = () => {
    window.location.href = google_link;
  };

  const loginWithNaver = () => {
    window.location.href = naver_link;
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">
      <div className="mt-[100px] flex flex-col items-center">
        <img src="/images/CAMP-STORY-LOGO-2.png" className="w-28" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <InputField
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <InputField
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full justify-center rounded-md px-3 py-2 text-sm/6 font-bold text-white shadow-sm 
              ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-500 hover:bg-primary-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-primary-500"
              }`}
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </button>
        </form>
        {submitError && <p className="mt-4 text-sm text-red-500">{submitError}</p>}

        <div className="flex justify-center my-5 gap-5">
          <button
            // to={PATH.findId}
            className="text-sm/6 text-gray-scale-400 hover:font-semibold"
          >
            아이디 찾기
          </button>
          <button
            // to={PATH.findPassword}
            className="text-sm/6 text-gray-scale-400 hover:font-semibold"
          >
            비밀번호 찾기
          </button>
          <Link
            to={PATH.signUp}
            className="text-sm/6 text-primary-500 font-semibold hover:font-bold"
          >
            회원가입
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="w-12 h-12 rounded-full bg-[#FFDC00] overflow-hidden flex items-center justify-center"
            onClick={loginWithKakao}
          >
            <img
              src="/images/social_login_icons/kakao.png"
              alt="kakao logo"
              className="size-9 ml-1"
            />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-[#03C75A] overflow-hidden"
            onClick={loginWithNaver}
          >
            <img
              src="/images/social_login_icons/naver.jpg"
              alt="kakao logo"
              className="size-full"
            />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-scale-100 overflow-hidden"
            onClick={loginWithGoolge}
          >
            <img
              src="/images/social_login_icons/google.png"
              alt="kakao logo"
              className="size-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
