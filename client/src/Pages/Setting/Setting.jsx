import React, { useContext, useState } from "react";
import "./Setting.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Setting() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePic = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="setting">
      <div className="wrapper">
        <div className="settingLable">
          <span className="setUpdate">Update Account</span>
          <span className="setDelete">Delete Account</span>
        </div>
        <form className="setForm" on onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="setProP          vv        ic">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="inputProPic">
              <i className="pIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="inputProPic"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <label>User Name</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="passowrd"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="setSubmit">
            Update
          </button>
          {success && (
            <span style={{ color: "green" }}>profile updated ....</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
