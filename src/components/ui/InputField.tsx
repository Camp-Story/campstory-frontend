interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  phone: string;
  fullName: string;
}

interface InputFieldProps {
  label: string;
  type: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

function InputField({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-body1 font-bold text-gray-scale-300">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-scale-500 outline outline-1 -outline-offset-1 ${
            error ? "outline-red-500" : "outline-gray-300"
          } placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 sm:text-sm/6`}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default InputField;
