import React, { useContext, useEffect } from "react";
import { AuthDetails } from "../../context/Authentication/AuthDetailsContext";
import { Navigate } from "react-router-dom";

export default function NotAuthenticated({ children }) {
  const {auther,loading,setLoading} = useContext(AuthDetails);

  if (loading) {
    return (
      <div
        role="status"
        className=" z-10 w-full bg-sec-color h-screen flex justify-center items-center"
      ></div>
    );
  }
  
  if (!auther) {
    return <Navigate to={"/login"} />
  }

  return children
}
