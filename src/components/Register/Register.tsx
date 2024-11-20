import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({
  onRegister,
}: {
  onRegister: (email: string, password: string) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegister(email, password);
  };

  return (
    <section className="login block-style">
      <Link className="login__logo-link" to="/" />
      <h2 className="login__title">Create an account</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-item">
          <label htmlFor="email" className="login__label">
            Email
          </label>
          <input
            className="login__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="login__form-item">
          <label htmlFor="password" className="login__label">
            Password 
          </label>
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            // placeholder="Password"
          />
        </div>
        {/* TODO добавить loading при сабмите */}
        <button className="login__button" type="submit">
          Sign up
        </button>
        <p className="login__text">Forgot your password?</p>
      </form>
      <p className="login__register">
        Already have an account?
        <Link className="login__link" to="/login">
          Sign in
        </Link>
      </p>
    </section>
  );
}

export default Register;
