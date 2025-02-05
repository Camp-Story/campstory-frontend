import { useNavigate } from "react-router";
import { PATH } from "@constants/path";
import AreaCard from "@./components/community/community/AreaCard";
import TagList from "@./components/community/TagList";
import { Tag } from "@components/community/Tag";

interface PostProps {
  content: string;
  tags: Tag[];
  image: string;
}

export default function Post({ content, tags, image }: PostProps) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(PATH.communityPost("1"))} className="max-w-[420px] cursor-pointer">
      <div className="flex flex-col gap-2.5 mb-[15px]">
        {/* TODO: || "https://placehold.co/490x320?text=CAMP+STORY" */}
        <img src={image} alt="thumbnail" />

        <TagList tags={tags} />

        <AreaCard location="울산 울주군" thumbnail="" title="신불산베이스캠프" />
      </div>

      <div className="text-[18px] text-gray-scale-400 line-clamp-2">{content}</div>
    </div>
  );
}
