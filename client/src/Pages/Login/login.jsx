import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email"
        />

        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginBtn">Login</button>
      </form>
      <button className="LoginRegisterBtn">
        <Link className="link" to="/register">
          Regstier
        </Link>
      </button>
    </div>
  );
}
