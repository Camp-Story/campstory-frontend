interface UserProfileProps {
  nickname: string;
  profileUrl: string;
}

export default function UserProfile({ nickname, profileUrl }: UserProfileProps) {
  return (
    <div className="flex gap-[5px] items-center">
      <img
        src={profileUrl || "https://placehold.co/30x30?text=CAMP+STORY"}
        alt="profile"
        className="rounded-full w-[30px] h-[30px]"
      />
      <span className="text-[15px] font-bold text-gray-scale-400">{nickname}</span>
    </div>
  );
}
