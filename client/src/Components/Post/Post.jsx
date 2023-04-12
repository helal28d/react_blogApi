import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./img/post.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Title of the post</span>
        <hr /> <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatibus
        minus laborum nostrum aut quis magni maiores deleniti nihil aliquam,
        quam possimus veritatis incidunt maxime aspernatur perferendis atque
        nobis necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Et voluptatibus minus laborum nostrum aut quis magni maiores
        deleniti nihil aliquam, quam possimus veritatis incidunt maxime
        aspernatur perferendis atque nobis necessitatibus!
      </p>
    </div>
  );
}
