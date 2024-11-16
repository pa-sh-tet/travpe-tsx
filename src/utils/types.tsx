export interface PostData {
  image: string;
  description: string;
  author: string;
  date: string;
  likes: number;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  summary: string;
  avatar: string;
  followers: number;
  following: number;
  aboutMe: string;
  tag: string;
}