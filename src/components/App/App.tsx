import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import mountains from "../../images/mountains.png";
import { PostData, UserData } from "../../utils/types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", { replace: true });
    }
  }, []);

  const user: UserData = {
    name: "John Doe",  
    email: "IzT9u@example.com",
    password: "password",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: mountains,
    followers: 100,
    following: 50,
    aboutMe: "I'm a software developer.",
    tag: "johndoe",
  };

  const posts: PostData[] = [
    {
      image: mountains,
      description: "Mountains",
      author: "John Doe",
      date: "2022-01-01",
      likes: 100,
    },
    {
      image: mountains,
      description: "Mountains",
      author: "John Doe",
      date: "2022-01-01",
      likes: 100,
    },
    {
      image: mountains,
      description: "Mountains",
      author: "John Doe",
      date: "2022-01-01",
      likes: 100,
    },
  ];

  const userPosts: PostData[] = [
    {
      image: mountains,
      description: "mooooooon",
      author: "John Doe",
      date: "2022-01-01",
      likes: 100,
    },
    {
      image: mountains,
      description: "Mountains",
      author: "John Doe",
      date: "2022-01-01",
      likes: 100,
    },
  ];

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route path="/profile" element={<ProfilePage userPosts={userPosts} user={user} />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
