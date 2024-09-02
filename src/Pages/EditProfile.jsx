import React, { useEffect, useState } from "react";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [uploadURL,setUploadURL] = useState("/images/profilePic.jpg")
  const navigate = useNavigate()

  function uploaded(e){
    const reader = new FileReader();
      reader.onloadend = () => {
        setUploadURL(reader.result); //made a path for your image
      };
      reader.readAsDataURL(e.target.files[0]); //read image as url
  }
  // useEffect(()=>{
  //   console.log(uploadURL);
    
  // },[uploadURL])
  

  function picHover(){
    setEditPic(true)
  }

  function noPicHover(){
    setEditPic(false)
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
            {/* <button className="text-main-color hover:text-main-hover overflow-hidden relative">
              <p className="cursor-pointer">Edit</p>
              <input
                onChange={uploaded}
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-10"
              />
            </button> */}
          </div>
          <div className="flex justify-center items-center w-full py-7">
            <div onMouseEnter={picHover} onMouseLeave={noPicHover} className="rounded-full w-32 h-32 relative overflow-hidden"
            style={{backgroundImage:`url(${uploadURL})`, backgroundSize:"cover"}}
            >
              <input
                onChange={uploaded}
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              />
              {editPic && <div className="bg-bg-main opacity-45 w-full cursor-pointer rounded-full h-full absolute top-0 flex justify-center items-center">
                <img src="/images/edit-text.png" alt="editIcon" />
              </div>}

            </div>
          </div>
        </div>
        <form>
          {/* First Name and Last Name */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div>
              <label
                className="text-base font-medium block text-white mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="firstName"
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
                className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="lastName"
                placeholder="Last name"
                style={{ caretColor: "#4FE0D2" }}
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-8">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="eventTitle"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-input  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              id="email"
              placeholder="ahmed@gmail.com"
              style={{ caretColor: "#4FE0D2" }}
            />
          </div>
          {/* Password */}
          <div className="mb-8 relative">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="**********"
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
          {/*Confirm Password */}
          <div className="mb-10 relative">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
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
          <div className="flex justify-end space-x-6">
            <button onClick={()=>navigate("/")} className=" w-[348px] text-white font-bold py-2 transition duration-300 ease-in-out rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Cancel
            </button>
            <button className=" w-[348px] bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-2 px-6 rounded-2xl">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
