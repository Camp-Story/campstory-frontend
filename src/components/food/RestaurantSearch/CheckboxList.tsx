import type { FilterCategory } from "types/common";
import CategoryCheckbox from "@./components/food/RestaurantSearch/CategoryCheckbox";

interface CheckboxListProps {
  title: string;
  categories: FilterCategory[];
  selectedValue?: string[];
  onChange?: (value: string) => void;
}

export default function CheckboxList({
  title,
  categories,
  selectedValue = [],
  onChange,
}: CheckboxListProps) {
  const handleCheckboxChange = (value: string) => {
    if (!onChange) return;

    let updatedValues = [...selectedValue];

    if (updatedValues.includes(value)) {
      updatedValues = updatedValues.filter((v) => v !== value); // ✅ 선택 해제
    } else {
      updatedValues.push(value); // ✅ 선택 추가
    }

    onChange(updatedValues.join(",")); // ✅ 배열을 콤마(,)로 구분하여 전달
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
            onChange={() => handleCheckboxChange(category.value)}
          />
        ))}
      </ul>
    </>
  );
}
