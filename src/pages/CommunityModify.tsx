import AreaCard from "@components/community/community/AreaCard";
import ImageUploader from "@components/community/community/communityCreate/ImageUploader";
import Tag from "@components/community/Tag";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "@utils/axiosInstance";
import { PATH } from "@constants/path";

interface Author {
  _id: string;
  fullName: string;
  email: string;
}

interface PostDetail {
  _id: string;
  title: string;
  content: string;
  image?: string;
  imagePublicId?: string;
  createdAt: string;
  author: Author;
}

export default function CommunityModify() {
  const { id } = useParams();
  const navigate = useNavigate();
  const JWT = localStorage.getItem("token");

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageFile, setImagefile] = useState<File | null>(null);
  const [imagePublicId, setImagePublicId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const currentUserId = localStorage.getItem("id");
  useEffect(() => {
    if (!id) return;
    apiInstance
      .get<PostDetail>(`/posts/${id}`)
      .then((res) => {
        const post = res.data;

        // 작성자 정보가 없거나, 현재 로그인한 사용자와 다르면 수정 권한 없음 처리
        if (!post.author || post.author._id !== currentUserId) {
          alert("수정 권한이 없습니다.");
          navigate(-1);
          return; // 이후 코드 실행 중단
        }

        try {
          const parsed = JSON.parse(post.title);
          setTitle(parsed.title || post.title);
          setContent(parsed.content || post.content);
        } catch {
          setTitle(post.title);
          setContent(post.content);
        }

        //기존 이미지의 publicId 저장
        if (post.imagePublicId) {
          setImagePublicId(post.imagePublicId);
        }

        if (post.image) {
          setImagePreview(post.image);
        }
      })
      .catch((err) => {
        console.error("게시글 상세 불러오기 실패:", err);
      });
  }, [id, currentUserId, navigate]);

  //기존 이미지를 삭제하는 버튼 핸들러
  const handleDeleteImage = () => {
    setImagefile(null);
    setImagePreview(null);
    alert("기존 이미지를 삭제하였습니다.");
  };

  const handleFileSelect = (file: File) => {
    setImagefile(file);
    //File 미리보기
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setImagePublicId(null);
  };

  const handleSubmit = async () => {
    if (!id) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다");
      navigate(PATH.login);
      return;
    }

    try {
      const formData = new FormData();

      const titleAndContent = JSON.stringify({ title, content });
      formData.append("title", titleAndContent);
      formData.append("postId", id);
      formData.append("channelId", "67a021790b62dc0dc6cc8e69");

      if (imageFile) {
        formData.append("image", imageFile);
      }

      //새 이미지가 없고 기존 이미지를 삭제한 경우.
      if (!imageFile && imagePublicId) {
        formData.append("imageToDeletePublicId", imagePublicId);
      }

      await apiInstance.put("/posts/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JWT}`,
        },
      });

      alert("게시글이 수정되었습니다.");
      navigate(-1); // 이전페이지로 이동
    } catch (error) {
      console.error("게시글 수정 실패:", error);
      alert("게시글 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-[618px] mx-auto mt-[52px]">
      <h1 className="mb-[30px] text-[26px] font-bold">게시글 수정</h1>

      <ImageUploader onFileSelect={handleFileSelect} />

      {/* 이미지 미리보기 영역 */}
      {imagePreview && (
        <div className="mb-4">
          <img src={imagePreview} alt="미리보기" className="w-full h-auto rounded" />
        </div>
      )}

      {/* 기존 이미지가있다면 삭제버튼 */}
      {imagePublicId && (
        <button
          onClick={handleDeleteImage}
          className="mb-4 px-3 py-2 border border-red-500 text-red-500 rounded"
        >
          이미지 삭제
        </button>
      )}

      <div className="flex flex-col gap-[15px]">
        <h2 className="text-sub-title">장소 선택</h2>
        <AreaCard location="충남 예산군" thumbnail="" title="스노우라인 캠핑빌리지" />
        <h2 className="text-sub-title">태그 선택</h2>
        <div className="flex gap-[5px]">
          <Tag tag="clean" isCheckbox />
          <Tag tag="kind" isCheckbox />
          <Tag tag="convenience" isCheckbox />
        </div>
        <textarea
          autoFocus
          className="h-[466px] p-[25px] border border-gray-scale-200 rounded-sm focus:outline-none"
          placeholder="이곳에 내용을 작성해주세요 (최소 10자 이상 작성)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="rounded bg-primary-500 text-white text-sub-title py-3 w-full text-center mt-[5px]"
        >
          수정하기
        </button>
      </div>
    </div>
  );
}
