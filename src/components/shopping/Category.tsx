interface CategoryProps {
  path: string;
  src: string;
  catName: string;
}

export default function Category({ path, src, catName }: CategoryProps) {
  return (
    <div onClick={() => alert(path)}>
      <div className="flex flex-col items-center justify-center rounded-full bg-gray-scale-100 w-[63px] h-[63px]">
        <img src={src} alt="" className=" w-[40px] h-[40px]" />
      </div>
      <span className="text-[15px] text-center">{catName}</span>
    </div>
  );
}
