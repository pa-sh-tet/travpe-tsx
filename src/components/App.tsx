import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import ProfilePage from "../pages/ProfilePage";
import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", { replace: true });
    }
  }, []);

  return (
    <div className="app">
      {/* <div className="page"> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
