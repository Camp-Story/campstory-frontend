import SearchBar from "./SearchBar";

interface BannerProps {
  src: string;
}

export default function Banner({ src }: BannerProps) {
  return (
    <div className="relative">
      <img src={src} alt="camping banner" className="w-full" />
      <SearchBar className="absolute bottom-[60px] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
