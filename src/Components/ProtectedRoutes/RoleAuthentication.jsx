import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { Navigate, Outlet } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { AuthDetails } from "../../context/Authentication/AuthDetailsContext";

export default function RoleAuthentication({ children }) {
  const [role, setRole] = useState();
  const { auther, loading ,setLoading} = useContext(AuthDetails);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "user"));
      const info = data.docs.map((doc) => ({ ...doc.data() }));
      const userInfo = info.filter((e) => e.email == auth.currentUser?.email);
      setRole(userInfo[0].role);
      // setLoading(false)
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div
        role="status"
        className=" z-10 w-full bg-sec-color h-screen flex justify-center items-center"
      ></div>
    );
  }

  if (!auther) {
    return <Navigate to={"/login"} />;
  }else
  if (role == "user") {
    return <Navigate to={"/"} />;
  }else
  if (role == "admin") {
    <Outlet />;
  }
  

  return children;
}
