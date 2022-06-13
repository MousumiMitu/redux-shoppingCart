import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <div>{<Outlet />}</div>
    </div>
  );
};

export default LayOut;
