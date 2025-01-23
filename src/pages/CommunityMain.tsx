import SearchInput from "@components/common/SearchInput";

export default function CommunityMain() {
  return (
    <>
      <div className="mt-[100px] mb-[60px]">
        <SearchInput handleSubmit={() => alert("submit!")} />
      </div>
    </>
  );
}
