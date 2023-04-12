import React from "react";
import "./Setting.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
export default function Setting() {
  return (
    <div className="setting">
      <div className="wrapper">
        <div className="settingLable">
          <span className="setUpdate">Update Account</span>
          <span className="setDelete">Delete Account</span>
        </div>
        <form className="setForm">
          <label htmlFor="">Profile Picture</label>
          <div className="setProPic">
            <img src="./img/profile.jpg" alt="" />
            <label htmlFor="inputProPic">
              <i className="pIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="inputProPic" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Helal" />
          <label>Email</label>
          <input type="text" placeholder="helal@gmail.com" />
          <label>Password</label>
          <input type="passowrd" />
          <button className="setSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
