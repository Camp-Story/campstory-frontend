interface UserBase {
  _id: string;
  fullName: string;
  email: string;
  coverImage: string;
  image: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
}

interface User extends UserBase {
  posts: string[];
  likes: Like[];
  comments: string[];
}

interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  comment: string;
  author: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface PostResponse {
  _id: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
  likes: Like[];
  comments: Comment[];
}

export default PostResponse;
