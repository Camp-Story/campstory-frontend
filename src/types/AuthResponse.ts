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
  posts: Post[];
  likes: Like[];
  comments: string[];
  followers: Follower[];
  following: Following[];
  notifications: Notification[];
  messages: Message[];
}

interface Post {
  _id: string;
  image: string;
  imagePublicId: string;
  title: string;
  channel: Channel;
  author: string;
  createdAt: string;
  updatedAt: string;
  likes: Like[];
  comments: Comment[];
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

interface Follower {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
}

interface Following {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
}

interface Notification {
  seen: boolean;
  _id: string;
  author: string;
  user: string;
  post?: string;
  follow?: string;
  comment?: Comment;
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  _id: string;
  message: string;
  sender: string;
  receiver: string;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

export default AuthResponse;
export type { User };
