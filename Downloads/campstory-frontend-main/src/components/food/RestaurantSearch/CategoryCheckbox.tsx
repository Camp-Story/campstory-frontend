interface CategoryCheckboxProps {
  value: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

export default function CategoryCheckbox({
  label,
  value,
  checked,
  onChange,
}: CategoryCheckboxProps) {
  return (
    <li className="w-full border-none cursor-pointer">
      <div className="flex gap-2 items-center">
        <input
          id={value}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className="cursor-pointer appearance-none w-6 h-5 rounded-full checked:bg-info-500 checked:border-info-500 bg-gray-scale-100 border-gray-scale-300"
        />
        <label htmlFor={value} className="w-full cursor-pointer">
          {label}
        </label>
      </div>
    </li>
  );
}
