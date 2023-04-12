import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="./img/sidebarImg.jpg" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          magni quae officiis possimus magnam, voluptatibus, ame ex odit cumque
          harum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarlistItem">Music</li>
          <li className="sidebarlistItem">Movies</li>
          <li className="sidebarlistItem">Tech</li>
          <li className="sidebarlistItem">Sport</li>
          <li className="sidebarlistItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
