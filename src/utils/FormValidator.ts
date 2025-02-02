const ERROR_MESSAGES = {
  EMAIL: "유효한 이메일 주소를 입력해주세요.",
  PASSWORD: "비밀번호는 8자 이상이어야 합니다.",
  CONFIRM_PASSWORD: "비밀번호가 일치하지 않습니다.",
  BIRTH_DATE: "올바른 생년월일을 입력해주세요.",
  PHONE: "올바른 휴대폰 번호를 입력해주세요.",
  FULL_NAME: "이름을 입력해주세요.",
};

// 정규식 검사 유틸리티 함수
const validateRegex = (value: string, regex: RegExp, errorMessage: string): string | undefined => {
  return regex.test(value) ? undefined : errorMessage;
};

class FormValidator {
  // 이메일 유효성 검사
  validateEmail(email: string): string | undefined {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateRegex(email, emailRegex, ERROR_MESSAGES.EMAIL);
  }

  // 비밀번호 유효성 검사
  validatePassword(password: string): string | undefined {
    return password.length >= 8 ? undefined : ERROR_MESSAGES.PASSWORD;
  }

  // 비밀번호 확인 유효성 검사
  validateConfirmPassword(confirmPassword: string, password: string): string | undefined {
    return confirmPassword === password ? undefined : ERROR_MESSAGES.CONFIRM_PASSWORD;
  }

  // 연도 유효성 검사
  validateBirthYear(year: string): string | undefined {
    const parsedYear = parseInt(year);
    const currentYear = new Date().getFullYear();

    if (!parsedYear || parsedYear < 1900 || parsedYear > currentYear) {
      return ERROR_MESSAGES.BIRTH_DATE;
    }
    return undefined;
  }

  // 월 유효성 검사
  validateBirthMonth(month: string): string | undefined {
    const parsedMonth = parseInt(month);

    if (!parsedMonth || parsedMonth < 1 || parsedMonth > 12) {
      return ERROR_MESSAGES.BIRTH_DATE;
    }
    return undefined;
  }

  // 일 유효성 검사
  validateBirthDay(day: string): string | undefined {
    const parsedDay = parseInt(day);

    // 기본적인 일자 범위 검사
    if (!parsedDay || parsedDay < 1 || parsedDay > 31) {
      return ERROR_MESSAGES.BIRTH_DATE;
    }

    return undefined;
  }

  // 전화번호 유효성 검사
  validatePhone(phone: string): string | undefined {
    const phoneRegex = /^01[016789]-?[0-9]{3,4}-?[0-9]{4}$/;
    return validateRegex(phone.replace(/-/g, ""), phoneRegex, ERROR_MESSAGES.PHONE);
  }

  // 이름 유효성 검사
  validateFullName(fullName: string): string | undefined {
    return fullName.length >= 2 ? undefined : ERROR_MESSAGES.FULL_NAME;
  }
}

export default FormValidator;
