import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import AddPostPopup from "../AddPostPopup/AddPostPopup";
import Navigation from "../Navigation/Navigation";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import { PostData, UserData } from "../../utils/types";
import {
  startMainPosts,
  startUserPosts,
  startUser,
  startUsers,
} from "../../utils/dataStart";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

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
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      //   navigate("/", { replace: true });
      // } else {
      navigate("/login", { replace: true });
    }
  }, []);

  useEffect(() => {
    setMainPosts(startMainPosts);
    setUserPosts(startUserPosts);
    setCurrentUser(startUser);
  }, []);

  function handleRegister(email: string, password: string) {
    startUsers.push({ ...startUser, email, password });
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  }

  function handleLogin(email: string, password: string) {
    const user = startUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      navigate("/", { replace: true });
    }
  }

  function logOut() {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  }

  const handleAddPostSubmit = (post: PostData) => {
    const newPost: PostData = {
      image: post.image,
      description: post.description,
      author: post.author,
      date: post.date,
      likes: post.likes,
      placeLocation: post.placeLocation,
    };
    setUserPosts([newPost, ...userPosts]);
    setMainPosts([newPost, ...mainPosts]);
    closeAllPopups();
  };

  const handlePostDelete = (post: PostData) => {
    const postIndex = userPosts.findIndex((p) => p.image === post.image);
    if (postIndex !== -1) {
      userPosts.splice(postIndex, 1);
      setUserPosts([...userPosts]);
    }
    const mainPostIndex = mainPosts.findIndex((p) => p.image === post.image);
    if (mainPostIndex !== -1) {
      mainPosts.splice(mainPostIndex, 1);
      setMainPosts([...mainPosts]);
    }
  };

  const handleToggleLike = (post: PostData) => {
    const postIndex = mainPosts.findIndex((p) => p.image === post.image);
    if (postIndex !== -1) {
      mainPosts[postIndex] = post;
      setMainPosts([...mainPosts]);
    }
    const userPostIndex = userPosts.findIndex((p) => p.image === post.image);
    if (userPostIndex !== -1) {
      userPosts[userPostIndex] = post;
      setUserPosts([...userPosts]);
    }
  };

  const handleAddPostClick = () => {
    setIsAddPostPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPostPopupOpen(false);
  };

  return (
    <div className="app">
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navigation isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="*" element={<div>404</div>}></Route>
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        ></Route>
        <Route
          path="/register"
          element={<RegisterPage onRegister={handleRegister} />}
        ></Route>
        <Route
          path="/"
          element={
            <MainPage
              posts={mainPosts}
              currentUser={currentUser}
              onAddPost={handleAddPostClick}
              onPostLike={handleToggleLike}
              onPostDelete={handlePostDelete}
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
              onPostLike={handleToggleLike}
              onPostDelete={handlePostDelete}
            />
          }
        />
        <Route path="/settings" element={<SettingsPage logOut={logOut} />} />
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
