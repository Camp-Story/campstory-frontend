// AreaCheckbox.tsx
interface AreaCheckboxProps {
  value: string;
  code: number;
  label: string;
  selectedArea: number | null;
  onAreaChange: (code: number) => void;
}

export default function EventAreaCheckbox({
  code,
  label,
  
  value,
  selectedArea,
  onAreaChange,
}: AreaCheckboxProps) {
  return (
    <div className="flex gap-2 items-center w-fit" key={code}>
      <input
        id={value}
        type="checkbox"
        value=""
        className="hidden peer"
        checked={selectedArea === code}
        onChange={() => onAreaChange(code)}
      />
      <label
        htmlFor={value}
        className="cursor-pointer border border-gray-scale-100 hover:bg-gray-scale-100/50 peer-checked:border-[#1A9EFE]/50 peer-checked:bg-[#1A9EFE]/15 peer-checked:hover:bg-[#1A9EFE]/30 peer-checked:text-info-500 w-[70px] text-center py-1 rounded-[20px] text-[13px] font-bold"
      >
        {label}
      </label>
    </div>
  );
}
