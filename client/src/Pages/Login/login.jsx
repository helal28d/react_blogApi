import React, { useContext, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username"
          ref={userRef}
        />

        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginBtn">Login</button>
      </form>
      <button className="LoginRegisterBtn" type="submit">
        <Link className="link" to="/register">
          Regstier
        </Link>
      </button>
    </div>
  );
}
