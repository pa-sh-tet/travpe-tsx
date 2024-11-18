import React from "react";
import { PostData, UserData } from "../utils/types";
import mountains from "../images/mountains.png";

export const startMainPosts: PostData[] = [
  {
    image: mountains,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["johndoe"],
  },
  {
    image: mountains,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "johndoe", "asdasc"],
  },
  {
    image: mountains,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "sadsad", "asdasc"],
  },
];

export const startUserPosts: PostData[] = [
  {
    image: mountains,
    description: "mooooooon",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["johndoe", "sadsad", "asdasc"],
  },
  {
    image: mountains,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "sadsad", "asdasc"],
  },
];

export const startUser: UserData = {
  name: "admin",
  email: "IzT9u@example.com",
  password: "password",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  avatar: mountains,
  followers: 100,
  following: 50,
  aboutMe: "I'm a software developer.",
  tag: "johndoe",
};
