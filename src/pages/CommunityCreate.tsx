import AreaCard from "@components/community/community/AreaCard";
import Tag from "@components/community/Tag";
import ImageUploader from "@components/community/community/communityCreate/ImageUploader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { apiInstance } from "@utils/axiosInstance";

export default function CommunityCreate() {
  const navigate = useNavigate();
  const JWT = localStorage.getItem("token");
  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState("");

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    //토큰이 없으면 로그인 페이지로 이동
    if (!token) {
      navigate("/login");
      return;
    }

    apiInstance
      .get("/auth-user")
      .then(() => {
        setIsLogined(true);
      })
      .catch((err) => {
        console.error(err);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div className="text-gray-scale-200 text-xl">Loading...</div>;
  }

  //로그인 상태 다시 체크
  if (!isLogined) {
    return navigate("/login");
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인을 해주세요!");
      navigate("/login");
      return;
    }

    try {
      const formData = new FormData();

      const titleAndContent = JSON.stringify({
        content: content,
      });
      formData.append("title", titleAndContent);

      formData.append("channelId", "67a021790b62dc0dc6cc8e69");
      formData.append("tags", JSON.stringify(selectedTags));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      console.log("title:", formData.get("title"));
      console.log("content:", formData.get("content"));
      console.log("channelId:", formData.get("channelId"));
      console.log("tags:", formData.get("tags"));
      console.log("image:", formData.get("image"));

      await apiInstance.post("/posts/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JWT}`,
        },
      });

      alert("게시글이 작성되었습니다.");
      navigate("/community");
    } catch (error) {
      console.log(error);
      alert("게시글 생성중 오류가 발생했습니다.");
    }
  };
  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 쓰기</h1>
      <ImageUploader
        onFileSelect={(file) => {
          setImageFile(file);
        }}
      />

      <div className="flex flex-col gap-[15px]">
        <h2 className="text-sub-title">장소 선택</h2>
        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
        <h2 className="text-sub-title">태그 선택</h2>
        <div className="flex gap-[5px]">
          <Tag
            tag="clean"
            isCheckbox
            onChange={(checked) => {
              setSelectedTags((prev) =>
                checked ? [...prev, "clean"] : prev.filter((t) => t !== "clean"),
              );
            }}
          />
          <Tag
            tag="kind"
            isCheckbox
            onChange={(checked) => {
              setSelectedTags((prev) =>
                checked ? [...prev, "kind"] : prev.filter((t) => t !== "kind"),
              );
            }}
          />
          <Tag
            tag="convenience"
            isCheckbox
            onChange={(checked) => {
              setSelectedTags((prev) =>
                checked ? [...prev, "convenience"] : prev.filter((t) => t !== "convenience"),
              );
            }}
          />
        </div>
        <textarea
          autoFocus
          className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none"
          placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]"
          onClick={handleSubmit}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
