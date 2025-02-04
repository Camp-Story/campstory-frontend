import Tag, { Tag as TagType } from "./Tag";

interface TagListProps {
  tags: TagType[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex gap-[5px]">
      {tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </div>
  );
}
