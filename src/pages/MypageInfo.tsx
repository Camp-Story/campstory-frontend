import { useMemo, useState } from "react";
import { useAuth } from "@hooks/useAuth/useAuth";
import { twMerge } from "tailwind-merge";
import FormValidator from "@utils/FormValidator";
import useForm from "@hooks/useForm";
import InputField from "@components/mypage/InputField";

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
  const { user, modifyUser } = useAuth();
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
    initialFormData: JSON.parse(user?.fullName || "") || initializeFormData,
    validator: formValidator,
  });
  const [isReadMode, setIsReadMode] = useState(true);

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
    const result = await modifyUser(formData as UserInfoState);

    if (!result.ok) {
      setFormData(JSON.parse(user?.fullName || ""));
    }
  };

  return (
    <div className="rounded-lg w-[740px]">
      <div className="flex justify-between items-center">
        <h1 className="text-sub-title font-bold mb-6">내 정보 관리</h1>
        <div
          className={twMerge(
            "px-2 py-1 rounded text-body1 text-white hover:brightness-95 cursor-pointer",
            isReadMode ? "bg-primary-500" : "bg-secondary-300",
          )}
          onClick={handleClick}
        >
          {isReadMode ? "수정하기" : isSubmitting ? "저장중.." : "저장하기"}
        </div>
      </div>

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
    </div>
  );
}
