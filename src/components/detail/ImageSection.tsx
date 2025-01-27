interface CampingSpotImageProps<T extends string = string> {
  [key: string]: T;
}

export default function ImageSection({ image1, image2, image3, image4 }: CampingSpotImageProps) {
  return (
    <section className="mt-20 w-full grid grid-cols-12 gap-4 mb-7">
      <div className="col-span-6 h-[400px] bg-gray-scale-100 rounded-xl overflow-hidden">
        <img
          src={image1 || "https://placehold.co/450x250?text=CAMP+STORY"}
          alt="캠핑장 이미지 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-6 grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-2">
        <div className="col-span-3 h-[196px] bg-gray-scale-100 rounded-xl overflow-hidden">
          <img
            src={image2 || "https://placehold.co/450x250?text=CAMP+STORY"}
            alt="캠핑장 이미지 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 h-[196px] bg-gray-scale-100 rounded-xl overflow-hidden">
          <img
            src={image3 || "https://placehold.co/450x250?text=CAMP+STORY"}
            alt="캠핑장 이미지 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 h-[196px] bg-gray-scale-100 rounded-xl overflow-hidden">
          <img
            src={image4 || "https://placehold.co/450x250?text=CAMP+STORY"}
            alt="캠핑장 이미지 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 h-[196px] bg-gray-scale-100 rounded-xl flex items-center justify-center text-sub-title">
          더보기
        </div>
      </div>
    </section>
  );
}
