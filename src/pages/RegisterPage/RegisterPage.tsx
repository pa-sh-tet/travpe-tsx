import React from "react";
import Register from "../../components/Register/Register";

function RegisterPage({
  onRegister,
}: {
  onRegister: (email: string, password: string) => void;
}) {
  return (
    <div className="login-page">
      <Register onRegister={onRegister} />
    </div>
  );
}

export default RegisterPage;
