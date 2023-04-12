import React from "react";
import "./Write.css";
export default function Write() {
  return (
    <div className="write">
      <img src="./img/post.jpg" className="writeImg" />
      <form className="writeForm ">
        <div className="writeFormGrouop">
          <label htmlFor="fileInput">
            <i className="writeIcon fa fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </div>
        <div className="writeFormGrouop">
          <textarea
            type="text"
            placeholder="Write your story..."
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
}
