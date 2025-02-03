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

  const handleLike = async (id: string) => {
    const result = await apiInstance.get(`/search/all/${id}`);

    const token = localStorage.getItem("token");

    if (result.data.length === 0) {
      await apiInstance.post(
        "/posts/create",
        {
          title: id,
          image: null,
          channelId,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setPosts((await apiInstance.get(`/posts/channel/${channelId}`)).data);
    }

    const post = await apiInstance.get(`/search/all/${id}`);

    const response = await apiInstance.post(
      "/likes/create",
      { postId: post.data._id },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (response.status === 200) {
      updateUser();
    }
  };

  const handleUnlike = async (id: string) => {
    const token = localStorage.getItem("token");
    const response = await apiInstance.delete("/likes/delete", {
      data: { id },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      updateUser();
    }
  };

  const isBookmarked = (id: string) => posts.find((p) => p.title === id);

  const handleClickLike = async (
    e: MouseEvent<HTMLDivElement>,
    bookmarked: boolean,
    id: string,
  ) => {
    e.stopPropagation();

    if (bookmarked) {
      handleUnlike(id);
    } else {
      handleLike(id);
    }
  };

  return {
    likes: user?.likes || [],
    handleClickLike,
    isBookmarked,
  };
}
