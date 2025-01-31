import type { FilterCategory } from "types/common";
import CategoryCheckbox from "@./components/food/RestaurantSearch/CategoryCheckbox";

interface CheckboxListProps {
  title: string;
  categories: FilterCategory[];
  selectedValue: string[];
  onChange: (updated: string[]) => void;
}

export default function CheckboxList({
  title,
  categories,
  selectedValue = [],
  onChange,
}: CheckboxListProps) {
  const handleToggle = (value: string) => {
    const found = selectedValue.includes(value);
    const updated = found ? selectedValue.filter((v) => v !== value) : [...selectedValue, value];

    onChange(updated);
  };

  return (
    <>
      <h4 className="text-base font-bold">{title}</h4>
      <ul className="w-48 flex flex-col gap-5 text-[15px] font-medium text-gray-scale-400">
        {categories.map((category) => (
          <CategoryCheckbox
            label={category.label}
            value={category.value}
            key={category.value}
            checked={selectedValue.includes(category.value)}
            onChange={() => handleToggle(category.value)}
          />
        ))}
      </ul>
    </>
  );
}
