import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayOut = () => {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div>{<Outlet />}</div>
    </div>
  );
};

export default LayOut;
