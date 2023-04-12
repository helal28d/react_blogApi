import React from "react";
import "./Register.css";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="registerBtn">Register</button>
      </form>
      <button className="registerLoginBtn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
