import React from "react";
import Login from "../../components/Login/Login";

function LoginPage({
  onLogin,
}: {
  onLogin: (email: string, password: string) => void;
}) {
  return (
    <div className="login-page">
      <Login onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;
