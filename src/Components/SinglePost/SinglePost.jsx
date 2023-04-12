import React from "react";
import "./SinglePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="wrapper">
        <img src="./img/post.jpg" alt="" className="singImg" />
        <h1 className="singPostTitle">Lorem ipsum dolor, sit amet </h1>
        <div className="singPostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon fas fa-trash-alt"></i>
        </div>
        <div className="singlePostInfo">
          <span className="singlepostAuth">
            Author :<b>Helal</b>
          </span>
          <span className="singlepostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laboriosam, pariatur quos, modi minus beatae explicabo necessitatibus
          alias neque commodi asperiores incidunt impedit quod voluptatem magnam
          cum culpa natus at? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos laboriosam, pariatur quos, modi minus beatae
          explicabo necessitatibus alias neque commodi asperiores incidunt
          impedit quod voluptatem magnam cum culpa natus at?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dignissimos laboriosam,
          pariatur quos, modi minus beatae explicabo necessitatibus alias neque
          commodi asperiores incidunt impedit quod voluptatem magnam cum culpa
          natus at?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos laboriosam, pariatur quos, modi minus beatae explicabo
          necessitatibus alias neque commodi asperiores incidunt impedit quod
          voluptatem magnam cum culpa natus at?
        </p>
      </div>
    </div>
  );
}
