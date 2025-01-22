interface CategoryCheckboxProps {
  value: string;
  label: string;
}

export default function CategoryCheckbox({ label, value }: CategoryCheckboxProps) {
  return (
    <li className="w-full border-none">
      <div className="flex gap-2 items-center">
        <input
          id={value}
          type="checkbox"
          value=""
          className="appearance-none w-6 h-5 rounded-full checked:bg-info-500 checked:border-info-500 bg-gray-scale-100 border-gray-scale-300"
        />
        <label htmlFor={value} className="w-full">
          {label}
        </label>
      </div>
    </li>
  );
}
