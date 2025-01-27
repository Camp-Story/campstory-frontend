import { useNavigate } from "react-router";
import { PATH } from "@constants/path";
import AreaCard from "@./components/community/community/AreaCard";
import TgaList from "@./components/community/TagList";

export default function Post() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(PATH.communityPost("1"))} className="cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src="/images/community/communityPostItem.png" alt="thumbnail" />

        <TgaList tags={["clean", "kind", "convenience"]} />

        <AreaCard location="울산 울주군군" thumbnail="" title="신불산베이스캠프" />
      </div>

      <div className="text-[18px] text-gray-scale-400 line-clamp-2 mb-[34px]">
        접근성좋고 주변 맛집도 있고 시설도 깨끗하고 좋았어요. 아이들이 놀기에도 좋은거같고 한번간
        캠핑장은 잘 안가는데 장박하시는 분들도 많이보였어요. 또 갈게요
      </div>
    </div>
  );
}
