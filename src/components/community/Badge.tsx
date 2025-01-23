interface BadgeProps {
  icon: JSX.Element;
  count?: number;
}

export default function Badge({ count, icon }: BadgeProps) {
  return (
    <div className="flex gap-1 items-center border border-gray-scale-200 rounded-xl text-gray-scale-200 text-[13px] px-2.5 py-1">
      {icon}
      {count && <div>{count}</div>}
    </div>
  );
}
