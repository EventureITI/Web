import React, { useContext, useState } from "react";
import { Validation } from "../context/Authentication/ValidationContext";
import SignupEmailValidation from "./validations/SignupEmailValidation";
import { fetchSignInMethodsForEmail, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { toast } from "react-toastify";

export default function ForgotPass() {
    const [successState,setSuccessState] = useState(false)
  const {
    userEmail,
    handleEmail,
    emailState,
    setEmailState,
    requiredEmailState,
    correctEmailState,
  } = useContext(Validation);

  async function handleForgotPass(e) {
    e.preventDefault();
    try {
        if(!requiredEmailState&&!correctEmailState){
                await sendPasswordResetEmail(auth, userEmail)
                setSuccessState(true)
        }else{
            setEmailState(true)
        }
    } catch (err) {
      console.log(err);
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
  return (
    <div className="w-full px-4 sm:px-20 md:px-32 xl:px-60 h-screen bg-sec-color flex justify-center items-center">
      <div className="w-full border rounded-lg border-main-color p-4 bg-zinc-800 bg-opacity-50">
        <h2 className="text-main-color font-Inter font-400 text-2xl text-center mb-5">
          Reset Password
        </h2>
        {successState && <div className="w-full py-10 p-5 sm:py-0 text-center flex flex-col justify-center items-center h-12 rounded-lg text-white font-Inter mb-5 bg-green-500 bg-opacity-60">
            <p>A password reset link has been sent to your email if it's registered!</p>
        </div>}
        <form onSubmit={handleForgotPass}>
          <div
            className={`flex font-Inter font-400 flex-col ${
              emailState ? "mb-0" : "mb-6"
            } `}
          >
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
                placeholder="Please enter your email"
                onChange={handleEmail}
                style={{ caretColor: "#4FE0D2" }}
                className={`${
                  !requiredEmailState && !correctEmailState
                    ? "focus:border-main-color focus:ring-main-color border-0"
                    : `focus:border-red-800 focus:ring-red-800 ${
                        emailState ? "border-[1px]" : "border-0"
                      } border-red-800`
                }
                    
                    mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color`}
              />
            </div>
            <SignupEmailValidation
              emailState={emailState}
              requiredEmailState={requiredEmailState}
              correctEmailState={correctEmailState}
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 font-medium text-white transition duration-300 ease-in-out border-[1px] border-main-color rounded-lg my-3 bg-sec-color bg-opacity-50 hover:bg-opacity-100"
          >
            <p>Forgot Password</p>
          </button>
        </form>
      </div>
    </div>
  );
}
