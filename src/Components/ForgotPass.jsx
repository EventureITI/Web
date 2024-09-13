import React, { useContext, useState } from "react";
import { Validation } from "../context/Authentication/ValidationContext";
import SignupEmailValidation from "./validations/SignupEmailValidation";
import {
  fetchSignInMethodsForEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export default function ForgotPass() {
  const [successState, setSuccessState] = useState(false);
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
      if (!requiredEmailState && !correctEmailState) {
        await sendPasswordResetEmail(auth, userEmail);
        setSuccessState(true);
      } else {
        setEmailState(true);
      }
    } catch (err) {
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
    <div className="min-h-screen bg-bg-main px-4 sm:px-20 md:px-40 lg:px-64 xl:px-96 flex justify-center items-center">
      <div className="w-full h-fit px-10 py-10 bg-ticket rounded-2xl flex-col justify-center items-start ">
        <h2 className="text-white font-Inter font-400 text-2xl text-center mb-5">
          Reset Password
        </h2>
        {successState && (
          <div className="w-full py-10 p-5 sm:py-0 text-center flex flex-col justify-center items-center h-12 rounded-lg text-white font-Inter mb-5 bg-green-500 bg-opacity-60">
            <p>
              A password reset link has been sent to your email if it's
              registered!
            </p>
          </div>
        )}
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
                    
                    mt-1 rounded-lg bg-sec-color p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color`}
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
            className="bg-main-color hover:bg-main-hover transition duration-300 ease-in-out p-3 w-full rounded-lg text-white font-600"
          >
            <p>Reset Password</p>
          </button>
        </form>
      </div>
    </div>
  );
}
