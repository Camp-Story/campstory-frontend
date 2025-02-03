import { useMemo, useRef, useState } from "react";
import { useAuth } from "@hooks/useAuth/useAuth";
import { twMerge } from "tailwind-merge";
import FormValidator from "@utils/FormValidator";
import useForm from "@hooks/useForm";
import InputField from "@components/mypage/InputField";
import { Form } from "react-router-dom";
import { PATH } from "@constants/path";

export type UserInfoState = {
  nickName: string;
  fullName: string;
  phone: string;
  birthDate: string;
};

const initializeFormData = {
  nickName: "",
  fullName: "",
  phone: "",
  birthDate: "",
};

export default function Info() {
  const { user, modifyUser, updateUserImage } = useAuth();
  const formValidator = useMemo(() => new FormValidator(), []);

  const {
    formData,
    isSubmitting,
    errors,
    setIsSubmitting,
    handleChange,
    setFormData,
    validateForm,
  } = useForm({
    initialFormData: JSON.parse(user?.fullName || "{}") || initializeFormData,
    validator: formValidator,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [isReadMode, setIsReadMode] = useState(true);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null); // 미리보기 이미지 URL

  const handleClick = () => {
    if (isReadMode) {
      setIsReadMode(false);
    } else {
      if (!validateForm()) return;

      setIsSubmitting(true);
      saveUserInfo();
      setIsReadMode(true);
      setIsSubmitting(false);
    }
  };

  const saveUserInfo = async () => {
    // 이미지 업로드
    if (profileImage) {
      const imageResult = await updateUserImage(profileImage);
      if (!imageResult.ok) {
        console.error("이미지 업로드 실패");
        return;
      }
    }

    // 사용자 정보 업데이트
    const result = await modifyUser(formData as UserInfoState);
    if (!result.ok && user) {
      setFormData(JSON.parse(user?.fullName));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // FileReader를 사용하여 미리보기 이미지 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // 미리보기 이미지 URL 설정
      };
      reader.readAsDataURL(file);

      // profileImage에 File 객체 저장
      setProfileImage(file);
    }
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="rounded-lg w-[740px]">
      <div className="flex justify-between">
        <h3 className="text-sub-title font-bold mb-6">내 정보 관리</h3>
      </div>

      <div className="mb-6 ">
        <div className="flex items-end justify-between relative">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            <img
              src={previewImage || user?.image || "https://placehold.co/80x80?text=CAMP+STORY"} // 미리보기 이미지 또는 기본 이미지
              alt="프로필 이미지"
              className="size-full object-cover"
            />
          </div>
          {!isReadMode && (
            <>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm text-gray-500"
                hidden
              />
              <div
                onClick={handleChooseFile}
                className="absolute w-7 h-7 rounded-full bg-primary-500 left-14 bottom-0 flex items-center justify-center"
              >
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.72 2.79L5.5 5.75C5.26393 6.06475 4.89344 6.25 4.5 6.25H4C2.48122 6.25 1.25 7.48122 1.25 9V19C1.25 20.5188 2.48122 21.75 4 21.75H20C21.5188 21.75 22.75 20.5188 22.75 19V9C22.75 7.48122 21.5188 6.25 20 6.25H19.5C19.1066 6.25 18.7361 6.06474 18.5 5.75L16.28 2.79C16.0251 2.45007 15.625 2.25 15.2 2.25H8.8C8.37508 2.25 7.97495 2.45007 7.72 2.79ZM12 8.25C9.37664 8.25 7.25 10.3767 7.25 13C7.25 15.6233 9.37664 17.75 12 17.75C14.6233 17.75 16.75 15.6233 16.75 13C16.75 10.3767 14.6233 8.25 12 8.25Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
            </>
          )}
          <div
            className={twMerge(
              "px-4 py-1 rounded text-body1 text-white hover:brightness-95 cursor-pointer",
              isReadMode ? "bg-primary-500" : "bg-secondary-300",
            )}
            onClick={handleClick}
          >
            {isReadMode ? "수정하기" : isSubmitting ? "저장중.." : "저장하기"}
          </div>
        </div>
      </div>

      {/* 사용자 정보 입력 필드 */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          type="text"
          value={formData.nickName}
          onChange={handleChange}
          disabled={isReadMode}
          error={errors.nickName}
          label="닉네임"
          name="nickName"
          placeholder="현재 닉네임"
        />
        <InputField
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          disabled={isReadMode}
          error={errors.fullName}
          label="이름"
          name="fullName"
          placeholder="홍길동"
        />
        <InputField
          type="text"
          value={formData.phone}
          onChange={handleChange}
          disabled={isReadMode}
          error={errors.phone}
          label="휴대폰 번호"
          name="phone"
          placeholder="010-1234-****"
        />
        <InputField
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          disabled={isReadMode}
          error={errors.birthDate}
          label="생년월일"
          name="birthDate"
          placeholder="19**-**-**"
        />
      </div>
      <Form
        action={PATH.logout}
        method="post"
        className="mt-10 bg-gray-scale-100 text-center px-5 py-2 rounded text-gray-scale-400 cursor-pointer hover:bg-gray-scale-100/70"
      >
        <button type="submit">로그아웃</button>
      </Form>
    </div>
  );
}
