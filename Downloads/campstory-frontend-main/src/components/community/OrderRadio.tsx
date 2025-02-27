interface OrderRadioProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}
export default function OrderRadio({ label, value, ...props }: OrderRadioProps) {
  return (
    <div>
      <input
        type="radio"
        id={value}
        value={value}
        name="order"
        className="hidden peer"
        required
        {...props}
      />
      <label
        htmlFor={value}
        className="text-gray-scale-300 peer-checked:text-gray-scale-400 peer-checked:font-bold cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
