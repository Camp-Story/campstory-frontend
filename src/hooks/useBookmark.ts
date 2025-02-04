import { apiInstance } from "@utils/axiosInstance";
import { useAuth } from "./useAuth/useAuth";
import { MouseEvent, useEffect, useState } from "react";
import { Post, PostOption } from "types/ChannelResponse";

export default function useBookMark(channelId: string) {
  const { user, updateUser } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    apiInstance.get<Post[]>(`/posts/channel/${channelId}`).then((res) => {
      setPosts(res.data);
    });
  }, [channelId]);

  const handleLike = async (e: MouseEvent<HTMLDivElement>, id: string, options?: PostOption) => {
    e.stopPropagation();

    const result = await apiInstance.get(`/search/all/${id}`);

    const token = localStorage.getItem("token");

    if (result.data.length === 0) {
      await apiInstance.post(
        "/posts/create",
        {
          title: JSON.stringify({ id, ...options }),
          image: null,
          channelId,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
    }

    const post = await apiInstance.get(`/search/all/${id}`);

    const response = await apiInstance.post(
      "/likes/create",
      { postId: post.data[0]._id },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (response.status === 200) {
      await updatePosts();
    }
  };

  const handleUnlike = async (e: MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const likeId = user?.likes.find((like) => like.post === id);

    const response = await apiInstance.delete("/likes/delete", {
      data: { id: likeId?._id },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      await updatePosts();
    }
  };

  const updatePosts = async () => {
    setPosts((await apiInstance.get(`/posts/channel/${channelId}`)).data);
    await updateUser();
  };

  const isBookmarked = (id: string) => {
    const post = posts.find((p) => JSON.parse(p.title).id === id);

    if (post?.likes.find((l) => l.user === user?._id)) {
      return post;
    }
    return undefined;
  };

  return {
    likes: user?.likes || [],
    posts,
    handleLike,
    handleUnlike,
    isBookmarked,
  };
}
