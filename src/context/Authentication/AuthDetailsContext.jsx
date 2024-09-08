import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";

export const AuthDetails = createContext();

export default function AuthDetailsContext({ children }) {
  const [auther, setAuther] = useState(null);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const authenticate = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuther(user);
      } else {
        setAuther(null);
      }
      setTimeout(() => {
        setLoading(false)
      },0);
    });
    return () => {
      authenticate(); // to unmount function
    };
  }, []);
  return <AuthDetails.Provider value={{auther,loading}}>{children}</AuthDetails.Provider>;
}
