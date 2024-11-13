import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import ProfilePage from "../pages/ProfilePage";
import MainPage from "../pages/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", { replace: true });
    }
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
