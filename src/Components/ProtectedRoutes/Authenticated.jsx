import React, { useContext, useEffect, useState } from "react";
import { AuthDetails } from "../../context/Authentication/AuthDetailsContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";

export default function Authenticated({ children }) {
  const {auther,loading,setLoading} = useContext(AuthDetails);
  const [role, setRole] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "user"));
      const info = data.docs.map((doc) => ({ ...doc.data() }));
      const userInfo = info.filter((e) => e.email == auth.currentUser?.email);
      setRole(userInfo[0]?.role);
    };
    getData();
  }, []);

  if (loading) {
    return <div role="status" className=" z-10 w-full bg-sec-color h-screen flex justify-center items-center"></div> 
  }


  if (auther && role == "user") {
    return <Navigate to={"/"} /> 
  }
  if (auther && role == "admin") {
    return <Navigate to={"/admin"} /> 
  }
  return children
}
