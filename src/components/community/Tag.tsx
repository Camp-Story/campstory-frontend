import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import LocalConvenienceStoreOutlinedIcon from "@mui/icons-material/LocalConvenienceStoreOutlined";

type Tag = "clean" | "kind" | "conveny";

interface TagProps {
  tag: Tag;
}

const TAGS = {
  clean: {
    label: "청결함",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: "12px" }} />,
  },
  kind: {
    label: "친절함",
    icon: <TagFacesOutlinedIcon sx={{ fontSize: "12px" }} />,
  },
  conveny: {
    label: "편의시설",
    icon: <LocalConvenienceStoreOutlinedIcon sx={{ fontSize: "12px" }} />,
  },
};

export default function Tag({ tag }: TagProps) {
  const { label, icon } = TAGS[tag];
  return (
    <div className="flex gap-2 items-center w-fit">
      <input id={tag} type="checkbox" value="" className="hidden peer" defaultChecked />
      <label
        htmlFor={tag}
        className="flex gap-[5px] items-center cursor-pointer border px-2.5 py-1 text-gray-scale-400 border-gray-scale-300 hover:bg-gray-scale-100/50 peer-checked:bg-gray-scale-100 peer-checked:hover:bg-gray-scale-100/30 rounded-[21px] text-[11px]"
      >
        <span>{icon}</span>
        <span className="leading-3">{label}</span>
      </label>
    </div>
  );
}
