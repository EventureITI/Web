import React, { useContext } from "react";
import { AuthDetails } from "../../context/Authentication/AuthDetailsContext";
import { Navigate } from "react-router-dom";

export default function Authenticated({ children }) {
  const {auther,loading} = useContext(AuthDetails);

  if (loading) {
    return <div role="status" className=" z-10 w-full bg-sec-color h-screen flex justify-center items-center"></div> 
  }

  if (auther) {
    return <Navigate to={"/"} />;
  }

  return children
}
