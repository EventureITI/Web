import React, { useContext } from "react";
import { AuthDetails } from "../../context/Authentication/AuthDetailsContext";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";

export default function NotAuthenticated({ children }) {
  const {auther , loading} = useContext(AuthDetails);

  if (loading) {
    return <div className="w-full h-screen bg-sec-color flex justify-center items-center"><Loader/></div>
  }

  if (!auther) {
    return <Navigate to={"/login"} />;
  }

  return children
}
