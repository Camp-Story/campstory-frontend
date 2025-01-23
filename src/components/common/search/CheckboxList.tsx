import type { FilterCategory } from "types/common";
import CategoryCheckbox from "./CategoryCheckbox";

interface CheckboxListProps {
  title: string;
  categories: FilterCategory[];
}

export default function CheckboxList({ title, categories }: CheckboxListProps) {
  return (
    <>
      <h4 className="text-base font-bold">{title}</h4>
      <ul className="w-48 flex flex-col gap-5 text-[15px] font-medium text-gray-scale-400">
        {categories.map((category) => (
          <CategoryCheckbox label={category.label} value={category.value} key={category.value} />
        ))}
      </ul>
    </>
  );
}
