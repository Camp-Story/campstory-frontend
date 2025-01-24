interface InputContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function InputContainer({ children, title }: InputContainerProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="text-sub-title text-gray-scale-400">{title}</h2>
      {children}
    </div>
  );
}
