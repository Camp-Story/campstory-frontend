import { apiInstance } from "@utils/axiosInstance";
import { useAuth } from "./useAuth/useAuth";
import { MouseEvent, useEffect, useState } from "react";
import { Post } from "types/ChannelResponse";

export default function useBookMark(channelId: string) {
  const { user, updateUser } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    apiInstance.get<Post[]>(`/posts/channel/${channelId}`).then((res) => {
      console.log(1, res.data);
      setPosts(res.data);
    });
  }, [channelId]);

  const handleLike = async (e: MouseEvent<HTMLDivElement>, id: string, img: string) => {
    e.stopPropagation();

    const result = await apiInstance.get(`/search/all/${id}`);

    const token = localStorage.getItem("token");

    if (result.data.length === 0) {
      const response = await fetch(img, { mode: "no-cors" });
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });

      await apiInstance.post(
        "/posts/create",
        {
          title: id,
          image: file,
          channelId,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setPosts((await apiInstance.get(`/posts/channel/${channelId}`)).data);
    }

    const post = await apiInstance.get(`/search/all/${id}`);

    const response = await apiInstance.post(
      "/likes/create",
      { postId: post.data[0]._id },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (response.status === 200) {
      await updateUser();
    }
  };

  const handleUnlike = async (e: MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const likeId = user?.likes.find((like) => like.post === id);
    console.log(likeId);
    const response = await apiInstance.delete("/likes/delete", {
      data: { id: likeId?._id },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      updateUser();
    }
  };

  const isBookmarked = (id: string) => {
    const post = posts.find((p) => p.title === id);

    if (post?.likes.find((l) => l.user === user?._id)) {
      return post;
    }
    return undefined;
  };

  return {
    likes: user?.likes || [],
    handleLike,
    handleUnlike,
    isBookmarked,
  };
}
