import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Validation } from "../context/Authentication/ValidationContext";
import NameValidation from "../Components/validations/NameValidation";
import SignupEmailValidation from "../Components/validations/SignupEmailValidation";
import SignupPassValidation from "../Components/validations/SignupPassValidation";
import ConfirmPassValidation from "../Components/validations/ConfirmPassValidation";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const {
    userEmail,
    userPass,
    nameState,
    setNameState,
    emailState,
    setEmailState,
    passState,
    setPassState,
    confirmPassState,
    setConfirmPassState,
    userFirstName,
    userLastName,
    minNameState,
    noNumNameState,
    requiredNameState,
    correctEmailState,
    requiredEmailState,
    correctPassState,
    requiredPassState,
    minPassState,
    correctConfirmPassState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handlePass,
    handleConfirmPass,
  } = useContext(Validation);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      if (
        !requiredNameState &&
        !noNumNameState &&
        !minNameState &&
        !requiredEmailState &&
        !correctEmailState &&
        !requiredPassState &&
        !minPassState &&
        !correctPassState &&
        !correctConfirmPassState
      ) {
        setDisabled(true);
        await createUserWithEmailAndPassword(auth, userEmail, userPass);
        await sendEmailVerification(auth.currentUser)
        await addDoc(collection(db, "users"), {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          authId: auth.currentUser.uid,
          imgURL: "",
          role: "user",
        });
        navigate("/");
        toast.success("Account Created Successfully", {
          icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
          progressStyle: { background: "white" },
          style: { backgroundColor: "#00796B", color: "white" },
        });
      } else {
        setNameState(true);
        setEmailState(true);
        setPassState(true);
        setConfirmPassState(true);
      }
    } catch (err) {

      setDisabled(false);
      if (err.code === "auth/email-already-in-use") {
        toast.error(
          "This Email is already registered, please choose another one",
          {
            icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
            progressStyle: { background: "white" },
            style: {
              backgroundColor: "#891a1a",
              color: "white",
              fontSize: "14px",
            },
          }
        );
      } else {
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
        <div className="hidden relative w-2/5 md:flex justify-center items-center bg-[url('/images/signupbg.jfif')] bg-cover bg-center px-10 lg:px-24">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-center font-Inter items-center gap-5 w-full">
            <p className="relative text-center text-white text-xl font-600">
              Already Registered?
            </p>
            <p className="text-white font-400 text-xs text-center">
              Sign in to manage your bookings and explore more events
            </p>
            <Link to="/login" className="block w-full">
              <button className="p-2 w-full rounded-lg text-white font-600 relative border border-main-color">
                <div className="absolute inset-0 bg-sec-color hover:opacity-100 transition duration-300 ease-in-out opacity-50 rounded-lg"></div>
                <span className="relative z-10">Sign In</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center px-8 pb-5 lg:px-16">
          <form
            onSubmit={handleSignUp}
            className="flex flex-col w-full font-Inter "
          >
            <div className="flex flex-col justify-center items-center">
              <div
                role="button"
                onClick={() => navigate("/")}
                className="text-2xl font-semibold whitespace-nowrap text-main-color hover:text-main-hover"
              >
                <p>Eventure</p>
              </div>
              <div
                className={`text-center text-white text-xl font-600 ${
                  nameState && emailState && passState ? "mb-0" : "mb-4"
                }`}
              >
                <p>Create a new account</p>
              </div>
            </div>
            <div className={`flex flex-col ${nameState ? "mb-0" : "mb-6"} `}>
              <div className="flex justify-between items-center gap-3">
                <div className="relative w-[48%]">
                  <label
                    htmlFor="fname"
                    className="block text-base font-500 text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="First name"
                    onChange={handleFirstName}
                    style={{ caretColor: "#4FE0D2" }}
                    className={`mt-1 rounded-lg p-3 w-full bg-input text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 ${
                      !requiredNameState && !minNameState && !noNumNameState
                        ? "focus:border-main-color focus:ring-main-color border-0"
                        : `focus:border-red-800 focus:ring-red-800 ${
                            nameState ? "border-[1px]" : "border-0"
                          } border-red-800`
                    } block px-2.5 pb-2.5 pt-3 appearance-none dark:text-white peer`}
                  />
                </div>

                <div className="relative w-[48%]">
                  <label
                    htmlFor="lname"
                    className="block text-base font-500 text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    placeholder="Last name"
                    onChange={handleLastName}
                    style={{ caretColor: "#4FE0D2" }}
                    className={`mt-1 rounded-lg p-3 w-full bg-input text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 ${
                      !requiredNameState && !minNameState && !noNumNameState
                        ? "focus:border-main-color focus:ring-main-color border-0"
                        : `focus:border-red-800 focus:ring-red-800 ${
                            nameState ? "border-[1px]" : "border-0"
                          } border-red-800`
                    } block px-2.5 pb-2.5 pt-3 appearance-none dark:text-white peer`}
                  />
                </div>
              </div>
              <NameValidation
                nameState={nameState}
                requiredNameState={requiredNameState}
                minNameState={minNameState}
                noNumNameState={noNumNameState}
              />{" "}
            </div>
            <div className={`flex flex-col ${emailState ? "mb-0" : "mb-6"} `}>
              <div className="relative">
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
                  style={{ caretColor: "#4FE0D2" }}
                  onChange={handleEmail}
                  className={`mt-1 rounded-lg p-3 w-full bg-input text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 ${
                    !requiredEmailState && !correctEmailState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 focus:ring-red-800 ${
                          emailState ? "border-[1px]" : "border-0"
                        } border-red-800`
                  } block px-2.5 pb-2.5 pt-3 appearance-none dark:text-white peer`}
                />
              </div>
              <SignupEmailValidation
                emailState={emailState}
                requiredEmailState={requiredEmailState}
                correctEmailState={correctEmailState}
              />
            </div>
            <div className={`flex flex-col ${passState ? "mb-0" : "mb-6"} `}>
              <div className="relative">
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
                  className={`mt-1 rounded-lg p-3 w-full bg-input text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 ${
                    !requiredPassState && !minPassState && !correctPassState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 ${
                          passState ? "border-[1px]" : "border-0"
                        } focus:ring-red-800 border-red-800`
                  } block px-2.5 pb-2.5 pt-3 appearance-none dark:text-white peer`}
                />
                <div
                  className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </div>
              </div>
              <SignupPassValidation
                passState={passState}
                requiredPassState={requiredPassState}
                minPassState={minPassState}
                correctPassState={correctPassState}
              />
            </div>
            <div
              className={`flex flex-col ${confirmPassState ? "mb-0" : "mb-6"} `}
            >
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-500 text-white"
                >
                  Confirm password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Enter your password"
                  style={{ caretColor: "#4FE0D2" }}
                  onChange={handleConfirmPass}
                  className={`mt-1 rounded-lg p-3 w-full bg-input text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 ${
                    !correctConfirmPassState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 focus:ring-red-800 ${
                          confirmPassState ? "border-[1px]" : "border-0"
                        } border-red-800`
                  } block px-2.5 pb-2.5 pt-3 appearance-none dark:text-white peer`}
                />
                <div
                  className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </div>
              </div>
              <ConfirmPassValidation
                confirmPassState={confirmPassState}
                correctConfirmPassState={correctConfirmPassState}
              />
            </div>
            <div>
              <button
                disabled={disabled}
                className="bg-main-color transition duration-300 ease-in-out hover:bg-main-hover p-3 w-full rounded-lg text-white font-600"
              >
                Sign Up
              </button>
            </div>
            <div className="md:hidden font-300 text-white">
              Already have an account?
              <Link to="/login" className="pl-1 w-full">
                <span className="hover:underline transition duration-300 ease-in-out text-main-color cursor-pointer">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
}
