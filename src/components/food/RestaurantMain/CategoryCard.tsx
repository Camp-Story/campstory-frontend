interface CategoryCardProps {
  src: string;
  catName: string;
  onClick: () => void;
}

export default function CategoryCard({ src, catName, onClick }: CategoryCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:brightness-75 transition"
      >
        <div className="w-15 bg-gray-200 rounded-full">
          {/* 아이콘/이미지 */}
          <img src={src} alt="flags" className="m-3" />
        </div>
        {/* 카테고리 이름 */}
        <span className="text-[20px] font-semibold mt-3">{catName}</span>
      </button>
    </>
  );
}
