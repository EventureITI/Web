import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

export default function NotFound() {
  const navigate = useNavigate();
  const [role,setRole] = useState();

  useEffect(() => {
    const setData = async () => {
      const data = await getDocs(collection(db, "users"));
      const userData = data.docs.map((doc) => ({ ...doc.data() }));
      const userInfo = userData.filter(
        (e) => e.email == auth.currentUser?.email
      );
      setRole(userInfo[0].role);
    };
    setData();
  }, []);
  return (
    <div
      className="w-full h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url('/images/Notfound4.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="font-Inter font-600 text-4xl tracking-[0.1em] sm:tracking-[0.15em] md:text-6xl lg:text-7xl opacity-60 md:tracking-[0.2em] lg:tracking-[0.35em] text-white mb-8">
        PAGE NOT FOUND
      </p>
    
      <button onClick={() => navigate("/")} className="p-2 w-36 rounded-lg text-white font-600 relative border border-main-color">
          <div className="absolute inset-0 bg-sec-color hover:opacity-100 transition duration-300 ease-in-out opacity-50 rounded-lg"></div>
          <span className="relative z-10">{role == "admin" ? "DashBoard" :"Back to Home"}</span>
      </button>
    </div>
  );
}
