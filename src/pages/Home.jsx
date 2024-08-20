import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return <div>
    <h1>Home</h1>
    <img src={currentUser?.avatar} alt="" />
    <a href={`mailto:${currentUser.email}`}>currentUser.email</a>
  </div>;
}
