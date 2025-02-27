interface CategoryProps {
  src: string;
  catName: string;
  onClick: () => void;
}

export default function Category({ src, catName, onClick }: CategoryProps) {
  return (
    <div onClick={onClick}>
      <div className="flex flex-col items-center justify-center text-center rounded-full bg-gray-scale-100 w-[63px] h-[63px]">
        <img
          src={src}
          alt="Category Image"
          className="flex flex-col items-center justify-center text-center w-[40px] h-[40px]"
        />
      </div>
      <p className="text-[15px] mt-[15px] text-center">{catName}</p>
    </div>
  );
}
