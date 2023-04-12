import React from "react";
import "./Home.css";
import Header from "../../Components/header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
