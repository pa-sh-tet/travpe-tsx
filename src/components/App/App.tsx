import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AddPostPopup from "../AddPostPopup/AddPostPopup";
import Navigation from "../Navigation/Navigation";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import { PostData, UserData } from "../../utils/types";
import { startMainPosts, startUserPosts, startUser } from "../../utils/dataStart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAddPostPopupOpen, setIsAddPostPopupOpen] = useState<boolean>(false);
  const [mainPosts, setMainPosts] = useState<PostData[]>([]);
  const [userPosts, setUserPosts] = useState<PostData[]>([]);
  const [currentUser, setCurrentUser] = useState<UserData>({
    name: "",
    aboutMe: "",
    avatar: "",
    email: "",
    followers: 0,
    following: 0,
    password: "",
    summary: "",
    tag: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", { replace: true });
    }
  }, []);

  useEffect(() => {
    setMainPosts(startMainPosts);
    setUserPosts(startUserPosts);
    setCurrentUser(startUser);
  }, []);

  const handleAddPostSubmit = (post: PostData) => {
    const newPost: PostData = {
      // _id: post._id,
      image: post.image,
      description: post.description,
      author: post.author,
      date: post.date,
      likes: post.likes,
    };
    setUserPosts([newPost, ...userPosts]);
    setMainPosts([newPost, ...mainPosts]);
    closeAllPopups();
  };

  const handlePostLike = () => {
    // const isLiked = post.likes.some((i) => i === currentUser._id);
  
    // if (!isLiked) {
    //   setMainPosts((state) =>
    //     state.map((c) =>
    //       c._id === post._id ? { ...c, likes: [...c.likes, currentUser._id] } : c
    //     )
    //   );
    // } else {
    //   setMainPosts((state) =>
    //     state.map((c) =>
    //       c._id === post._id
    //         ? { ...c, likes: c.likes.filter((i) => i !== currentUser._id) }
    //         : c
    //     )
    //   );
    // }
  };

  const handleAddPostClick = () => {
    setIsAddPostPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPostPopupOpen(false);
  };

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              posts={mainPosts}
              onAddPost={handleAddPostClick}
              currentUser={currentUser}
              onPostLike={handlePostLike}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              userPosts={userPosts}
              currentUser={currentUser}
              onAddPost={handleAddPostClick}
              onPostLike={handlePostLike}
            />
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <AddPostPopup
        isOpen={isAddPostPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleAddPostSubmit}
        currentUser={currentUser}
      />
    </div>
  );
}

export default App;
