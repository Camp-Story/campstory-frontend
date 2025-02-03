interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export default function InputField({ error, label, name, ...props }: InputFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-body1">
        {label}
      </label>
      <div className="mt-2">
        <input
          {...props}
          name={name}
          className="w-full bg-gray-scale-100 rounded-md mt-[10px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:text-gray-scale-500"
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
