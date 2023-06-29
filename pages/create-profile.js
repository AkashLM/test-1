import Image from "next/image";
import React, { useState, useRef } from "react";
import profilePen from "../assets/profilePen.svg";
import profile from "../assets/profile.svg";
import { toastErr } from "../components/Toaster";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik, Field } from "formik";
import cs from "classnames";
import { signUpSchema } from "../validation";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SpinnerLoader from "../components/SpinnerLoader";
import DiamondBg from "../components/UI/DiamondBg";
import Header from "../components/Header";

import { postUserData } from "../lib/api";

const CreateProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [touchPhone, setTouchPhone] = useState(false);
  const [touchDate, setTouchDate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(profile);
  const router = useRouter();
  const fileInputRef = useRef(null);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: 0,
    dob: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("onSubmit");
        console.log(values);
        action.resetForm();
      },
    });
  // console.log(errors);

  const handleInputBlur = () => {
    setTouchPhone(true);
  };
  const handleInputBlurDate = () => {
    setTouchDate(true);
  };

  const handleProfileIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    try {
      setSelectedImage(URL.createObjectURL(file));
    } catch (err) {
      toastErr("Error in uploading...");
    }
  };

  const validateNumberInput = (value) => {
    // console.log(value);
    // return value?.length >= 13;
  };

  const getFieldClasses = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return "border-red-500"; // Apply error field style
    } else if (touched[fieldName] && !errors[fieldName]) {
      return "border-[#D0B47D]"; // Apply success field style
    }
    return "border-[#A2A2A2]"; // Apply default style
  };

  const inputNumberStyle = !touchPhone
    ? "border border-[#A2A2A2]"
    : phoneNumber !== 0
    ? "border border-[#D0B47D]"
    : "border border-[red-500]";

  const inputDateStyle = !touchDate
    ? "border border-[#A2A2A2]"
    : selectedDate !== null
    ? "border border-[#D0B47D]"
    : "border border-red-500";

  const submitOnClickHandler = () => {
    try {
      console.log("submit handler");
      // router.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    } finally {
      setVisible(true);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-10 lg:mt-20">
        <DiamondBg />
        <div className="w-[400px] p-5 bg-[#0D0D0D] rounded-xl relative z-10">
          <div className="text-center text-xl text-white">Create Profile</div>
          <div className="flex justify-center my-5">
            <Image
              src={selectedImage}
              alt="pr-bg"
              onClick={handleProfileIconClick}
              className="cursor-pointer rounded-full h-[85px] object-top object-cover"
              width={85}
              height={85}
            />
            <div className="cursor-pointer flex items-end relative right-6">
              <Image
                src={profilePen}
                alt="pr-pen"
                onClick={handleProfileIconClick}
              />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <input
                type="name"
                id="name"
                name="name"
                className={cs(
                  "bg-transparent border outline-none my-34 text-[#D0B47D] placeholder:text-[#A2A2A2] text-sm rounded-lg block w-full p-2.5",
                  getFieldClasses("name")
                )}
                placeholder="Username"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="my-3">
              <input
                type="email"
                name="email"
                id="email"
                className={cs(
                  "bg-transparent border outline-none my-34 text-[#D0B47D] placeholder:text-[#A2A2A2] text-sm rounded-lg block w-full p-2.5",
                  getFieldClasses("email")
                )}
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex my-3">
              <PhoneInput
                autoComplete="off"
                name="phoneNumber"
                // Change the default country
                defaultCountry="IT"
                value={phoneNumber}
                placeholder="Enter phone number"
                onBlur={handleInputBlur}
                numberInputProps={{
                  className:
                    "outline-none bg-transparent placeholder:text-[#A2A2A2]",
                }}
                onChange={(value) => {
                  setPhoneNumber(validateNumberInput(value));
                }}
                className={cs(
                  "bg-transparent my-34 outline-none text-[#D0B47D] placeholder:text-[#A2A2A2] text-sm rounded-lg block w-full p-2.5",
                  inputNumberStyle
                )}
              />
            </div>
            <div className="my-3">
              <DatePicker
                name="dob"
                placeholderText="Date Of Birth"
                dateFormat="dd-MM-yyyy"
                className={cs(
                  "bg-transparent my-34 outline-none text-[#D0B47D] placeholder:text-[#A2A2A2] text-sm rounded-lg block w-full p-2.5",
                  inputDateStyle
                )}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                onBlur={handleInputBlurDate}
              />
            </div>
            <button
              type="submit"
              // onClick={submitOnClickHandler}
              className="h-12 bg-[#D0B47D] rounded-full w-full text-lg text-black font-bold"
            >
              {visible ? <SpinnerLoader visible={visible} /> : "Create Profile"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
