import React, { useContext, useEffect, useState } from "react";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";
import { useNavigate } from "react-router-dom";
import { Validation } from "../context/Authentication/ValidationContext";
import { auth, db, storage } from "../firebase/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { updateEmail, updatePassword } from "firebase/auth";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import NameValidation from "../Components/validations/NameValidation";
import EmailValidation from "../Components/validations/EmailValidation";
import PassValidation from "../Components/validations/PassValidation";
import ConfirmPassValidation from "../Components/validations/ConfirmPassValidation";
import SignupPassValidation from "../Components/validations/SignupPassValidation";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [userInfoImg, setUserInfoImg] = useState("");
  const [userInfoId, setUserInfoId] = useState("");

  const {
    userEmail,
    setUserEmail,
    userPass,
    nameState,
    setNameState,
    emailState,
    setEmailState,
    passState,
    confirmPassState,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    minNameState,
    noNumNameState,
    requiredNameState,
    correctEmailState,
    editEmailRequireState,
    correctPassState,
    minPassState,
    correctConfirmPassState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handlePass,
    handleConfirmPass,
  } = useContext(Validation);
  const navigate = useNavigate();

  // save profile edits
  async function handleEditProfile(e) {
    e.preventDefault();
    try {
      if (
        !requiredNameState &&
        !noNumNameState &&
        !minNameState &&
        !editEmailRequireState &&
        !correctEmailState
      ) {
        await updateDoc(doc(db, "user", userInfoId), {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          imgURL: userInfoImg,
        });
        // await updateEmail(auth.currentUser, userEmail);
        await updatePassword(auth.currentUser, userPass);
        toast.success("Your edits are saved successfully!", {
          icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
          progressStyle: { background: "white" },
          style: { backgroundColor: "#00796B", color: "white" },
        });
        navigate("/");
      } else {
        setNameState(true);
        setEmailState(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, try again later");
    }
  }

  //Change img URL
  const handleUploadImage = (e) => {
    const imagesRef = ref(storage, `userImg/${uuid()}`);
    uploadBytes(imagesRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // console.log(url);
        setUserInfoImg(url);
      });
    });
  };

  useEffect(() => {
    const setData = async () => {
      const data = await getDocs(collection(db, "user"));
      const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const userInfo = userData.filter(
        (e) => e.email == auth.currentUser.email
      );
      setUserInfoId(userInfo[0].id);
      setUserFirstName(userInfo[0].firstName);
      setUserLastName(userInfo[0].lastName);
      setUserEmail(userInfo[0].email);
      {
        userInfo[0].imgURL != " "
          ? setUserInfoImg(userInfo[0].imgURL)
          : setUserInfoImg("/images/carbon_user-avatar-filled.svg");
      }
    };
    setData();
  }, []);

  function picHover() {
    setEditPic(true);
  }

  function noPicHover() {
    setEditPic(false);
  }

  return (
    <div className=" bg-bg-main px-50">
      <div className="w-full max-w-xx rounded-lg px-4 container mx-auto pt-20 pb-8">
        <h2 className="text-[32px] text-white font-semibold mb-3">
          Edit Profile
        </h2>
        <div className="border-b-2 border-sec-color mb-2">
          <div className="flex justify-between w-full border-t-2 border-sec-color pt-1">
            <p className="text-base font-medium block text-white">
              Profile Picture
            </p>
          </div>
          <div className="flex justify-center items-center w-full py-7">
            <div
              onMouseEnter={picHover}
              onMouseLeave={noPicHover}
              className="rounded-full w-32 h-32 relative overflow-hidden"
              style={{
                backgroundImage: `url(${userInfoImg})`,
                backgroundSize: "cover",
              }}
            >
              <input
                onChange={handleUploadImage}
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              />
              {editPic && (
                <div className="bg-bg-main opacity-45 w-full cursor-pointer rounded-full h-full absolute top-0 flex justify-center items-center">
                  <img src="/images/edit-text.png" alt="editIcon" />
                </div>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={handleEditProfile}>
          {/* First Name and Last Name */}
          <div className={`flex flex-col ${nameState ? "mb-0" : "mb-6"} `}>
            <div className=" grid grid-cols-2 gap-4">
              <div>
                <label
                  className="text-base font-medium block text-white mb-2"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2  ${
                    !requiredNameState && !minNameState && !noNumNameState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 focus:ring-red-800 ${
                          nameState ? "border-[1px]" : "border-0"
                        } border-red-800`
                  }`}
                  type="text"
                  id="firstName"
                  value={userFirstName}
                  onChange={handleFirstName}
                  placeholder="First name"
                  style={{ caretColor: "#4FE0D2" }}
                />
              </div>
              <div>
                <label
                  className="block text-white mb-2 text-base font-medium"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 ${
                    !requiredNameState && !minNameState && !noNumNameState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 focus:ring-red-800 ${
                          nameState ? "border-[1px]" : "border-0"
                        } border-red-800`
                  }`}
                  type="text"
                  id="lastName"
                  value={userLastName}
                  onChange={handleLastName}
                  placeholder="Last name"
                  style={{ caretColor: "#4FE0D2" }}
                />
              </div>
            </div>
            <NameValidation
              nameState={nameState}
              requiredNameState={requiredNameState}
              minNameState={minNameState}
              noNumNameState={noNumNameState}
            />
          </div>
          {/* Email */}
          <div
            className={`flex font-Inter font-400 flex-col ${
              emailState ? "mb-0" : "mb-6"
            } `}
          >
            <div>
              <label
                className="block text-white mb-2 text-base font-medium"
                htmlFor="eventTitle"
              >
                Email
              </label>
              <input
                className={`w-full px-4 py-3 bg-input  text-white rounded-xl focus:outline-none focus:ring-2 ${
                  !editEmailRequireState && !correctEmailState
                    ? "focus:border-main-color focus:ring-main-color border-0"
                    : `focus:border-red-800 focus:ring-red-800 ${
                        emailState ? "border-[1px]" : "border-0"
                      } border-red-800`
                }`}
                type="email"
                id="email"
                value={userEmail}
                onChange={handleEmail}
                placeholder="example@email.com"
                style={{ caretColor: "#4FE0D2" }}
              />
            </div>
            <EmailValidation
              emailState={emailState}
              editEmailRequireState={editEmailRequireState}
              correctEmailState={correctEmailState}
            />
          </div>
          {/* Password */}
          <div
            className={`flex font-Inter font-400 flex-col ${
              passState ? "mb-0" : "mb-6"
            } `}
          >
            <div className=" relative">
              <label
                className="block text-white mb-2 text-base font-medium"
                htmlFor="password"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 pr-10 ${
                    !minPassState && !correctPassState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 ${
                          passState ? "border-[1px]" : "border-0"
                        } focus:ring-red-800 border-red-800`
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="**********"
                  onChange={handlePass}
                  style={{ caretColor: "#4FE0D2" }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute right-0 bottom-3 mr-3 flex items-center mt-8"
                >
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              </div>
            </div>
            <PassValidation
              passState={passState}
              minPassState={minPassState}
              correctPassState={correctPassState}
            />
          </div>
          {/*Confirm Password */}
          <div
            className={`flex font-Inter font-400 flex-col ${
              confirmPassState ? "mb-0" : "mb-6"
            } `}
          >
            <div className="relative">
              <label
                className="block text-white mb-2 text-base font-medium"
                htmlFor="confirmPassword"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 pr-10 ${
                    !correctConfirmPassState
                      ? "focus:border-main-color focus:ring-main-color border-0"
                      : `focus:border-red-800 focus:ring-red-800 ${
                          confirmPassState ? "border-[1px]" : "border-0"
                        } border-red-800`
                  }`}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={handleConfirmPass}
                  placeholder="**********"
                  style={{ caretColor: "#4FE0D2" }}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="cursor-pointer absolute right-0 bottom-3 mr-3 flex items-center mt-8"
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              </div>
            </div>
            <ConfirmPassValidation
              confirmPassState={confirmPassState}
              correctConfirmPassState={correctConfirmPassState}
            />
          </div>
          <div className="flex justify-end space-x-6">
            <button
              onClick={() => navigate("/")}
              className=" w-[348px] text-white font-bold py-2 transition duration-300 ease-in-out rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" w-[348px] bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-2 px-6 rounded-2xl"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
