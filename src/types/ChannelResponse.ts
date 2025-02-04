import { Like, User } from "./AuthResponse";

export interface PostOption {
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface PostTitle extends Partial<PostOption> {
  id: string;
}

export interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image: string | null;
  imagePublicId: string;
  title: string;
  Channel: Channel[];
  author: User;
  createdAt: string;
  updatedAt: string;
}
