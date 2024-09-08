import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../firebase/firebase-config";
import { collection, getDoc, getDocs } from "firebase/firestore";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [invalid, setInvalid] = useState();
  const [err, setErr] = useState(null);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();

  function handleEmail(e) {
    setUserEmail(e.target.value);
  }
  function handlePass(e) {
    setUserPass(e.target.value);
  }
  async function handleLogin(e) {
    e.preventDefault();

    //get logged in user info
    // const data = await getDocs(collection(db,"user"))
    // const userInfo = data.docs.map((doc)=>({...doc.data()}))
    // console.log(userInfo.filter((e)=>e.email == userEmail)[0].firstName);
    
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPass);
      
      navigate("/");
      toast.success("Logged in Successfully", {
        icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
        progressStyle: { background: "white" },
        style: { backgroundColor: "#00796B", color: "white" },
      });
    } catch (err) {
      console.log(err);
      if (err.code == "auth/missing-email") {
        setInvalid(true);
        setEmailErr(true);
        setErr("Please enter your Email!");
      } else if (
        err.code == "auth/invalid-email" ||
        !emailExp.test(userEmail)
      ) {
        setInvalid(true);
        setEmailErr(true);
        setErr("Please enter a valid Email!");
      } else if (err.code == "auth/missing-password") {
        setInvalid(true);
        setPassErr(true);
        setEmailErr(false);
        setErr("Please enter your Password!");
      } else if (err.code == "auth/invalid-credential") {
        setInvalid(true);
        setEmailErr(true);
        setPassErr(true);
        setErr("incorrect Email or Password!");
      } else {
        setInvalid(false);
        setEmailErr(false);
        setPassErr(false);
        toast.error("Something went wrong, try again later", {
          icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
          progressStyle: { background: "white" },
          style: {
            backgroundColor: "#891a1a",
            color: "white",
            fontSize: "14px",
          },
        });
      }
    }
  }

  return (
    <div>
      {/* <Layout> */}
      <div className="flex flex-col md:flex-row md:justify-between justify-center h-screen bg-bg-main">
        <div className="w-full md:w-3/5 flex justify-center items-center px-8 lg:px-28">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full gap-8 font-Inter "
          >
            <div className="flex flex-col justify-center items-center">
              <div
                role="button"
                onClick={() => navigate("/")}
                className="text-2xl font-semibold whitespace-nowrap text-main-color hover:text-main-hover"
              >
                Eventure
              </div>
              <div className="text-center text-white text-xl pt-2 font-600">
                Sign in to your account
              </div>
            </div>
            <div>
              {invalid ? (
                <div className="p-4 mb-5 flex justify-center border-[1px] border-red-800 bg-sec-color rounded-lg bg-opacity-50 text-red-700">
                  <p>{err}</p>
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-500 text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleEmail}
                  style={{ caretColor: "#4FE0D2" }}
                  className={`${
                    emailErr ? "border-[1px] border-red-800" : "border-0"
                  } mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color`}
                />
              </div>
            </div>

            <div className="relative ">
              <label
                htmlFor="password"
                className="block text-base font-500 text-white"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={handlePass}
                style={{ caretColor: "#4FE0D2" }}
                className={`${
                  passErr ? "border-[1px] border-red-700" : "border-0"
                } mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color`}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center pb-1 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </div>

              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-main-color font-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button className="bg-main-color hover:bg-main-hover transition duration-300 ease-in-out p-3 w-full rounded-lg text-white font-600">
                Sign In
              </button>
            </div>
            <div className="md:hidden -mt-4 font-300 text-white">
              Don’t have an account?
              <Link to="/signup" className="pl-1 w-full">
                <span className="hover:underline transition duration-300 ease-in-out text-main-color cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden relative w-2/5 md:flex justify-center items-center bg-[url('/images/loginbg.jfif')] bg-cover bg-center px-10 lg:px-24">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-center font-Inter items-center gap-5 w-full">
            <p className="relative text-white text-xl font-600">New User?</p>
            <p className="text-white font-400 text-xs text-center">
              Start your journey to unforgettable experiences today
            </p>
            <Link to="/signup" className="block w-full">
              <button className="p-2 w-full rounded-lg text-white font-600 relative border border-main-color">
                <div className="absolute inset-0 bg-sec-color hover:opacity-100 transition duration-300 ease-in-out opacity-50 rounded-lg"></div>
                <span className="relative z-10">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
}
