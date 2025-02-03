// hooks/useForm.ts
import { useState, useCallback } from "react";
import FormValidator from "@utils/FormValidator";

interface FormData {
  [key: string]: string;
}

interface ValidationErrors {
  [key: string]: string | undefined;
}

interface UseFormOptions {
  initialFormData: FormData;
  initialErrors?: ValidationErrors;
  validator: FormValidator;
}

const useForm = ({ initialFormData, initialErrors = {}, validator }: UseFormOptions) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = useCallback(
    (name: string, value: string, subValue?: string): string | undefined => {
      switch (name) {
        case "email":
          return validator.validateEmail(value);
        case "password":
          return validator.validatePassword(value);
        case "confirmPassword":
          if (!subValue) return;
          return validator.validateConfirmPassword(value, subValue);
        case "birthYear":
          return validator.validateBirthYear(value);
        case "birthMonth":
          return validator.validateBirthMonth(value);
        case "birthDay":
          return validator.validateBirthDay(value);
        case "birthDate":
          return validator.validateBirthDate(value);
        case "phone":
          return validator.validatePhone(value);
        case "fullName":
        case "nickName":
          return validator.validateFullName(value);
        default:
          return undefined;
      }
    },
    [validator],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const fieldName = name as Extract<keyof FormData, string>;

      setFormData((prev) => ({ ...prev, [fieldName]: value }));

      if (value.trim() !== "") {
        const newError = validateField(
          fieldName,
          value,
          fieldName === "confirmPassword" ? formData.password : undefined,
        );
        setErrors((prev) => ({ ...prev, [fieldName]: newError }));
      } else {
        setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
      }
    },
    [formData.password, validateField],
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    for (const field in formData) {
      if (Object.hasOwnProperty.call(formData, field)) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    validateField,
    handleChange,
    validateForm,
  };
};

export default useForm;
