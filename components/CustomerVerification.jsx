import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../styles/Phone.module.css";
import cs from "classnames";
import { useState } from "react";
import { useFormik, Field } from "formik";
import { signUpSchema } from "../validation";
import axios from "axios";
import { SERVER_URL } from "./config";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function CustomerVerification({ onClick }) {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [touchPhone, setTouchPhone] = useState(false);

  const inputNumberStyle = !touchPhone
    ? "border border-[#A2A2A2]"
    : phoneNumber !== 0
    ? "border border-[#D0B47D]"
    : "border border-[red-500]";

  const validateNumberInput = (value) => {
    console.log(value);
    // return value?.length >= 13;
  };
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

  const verifyMobileOtp = async () => {
    console.log("OTP in process");
    try {
      const resp = await axios.post(`${SERVER_URL}/api/sendOTP`, {
        phone: phoneNumber,
      });
      console.log(resp.data);
    } catch (err) {
      console.error(err);
      toast.error("Some error sending OTP");
    }
  };

  const sendEmailOtp = async () => {
    console.log("Email sent!");

    const data = {
      service_id: "service_s15akjc",
      template_id: "template_j7waglf",
      user_id: "xHzlOBf8Isw3kbBQR",
      template_params: {
        otp: "5423",
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("Your mail is sent!");
      })
      .catch((error) => {
        alert("Oops... " + JSON.stringify(error));
      });

  };

  const getFieldClasses = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return "border-red-500"; // Apply error field style
    } else if (touched[fieldName] && !errors[fieldName]) {
      return "border-[#D0B47D]"; // Apply success field style
    }
    return "border-[#A2A2A2]"; // Apply default style
  };

  return (
    <div className='flex flex-col justify-between h-full gap-4 items-center text-white'>
      <div>
        <h1 className='font-bold text-2xl text-center mb-6'>
          Customer Verification
        </h1>
        <p className='text-[#9D9D9D] text-center mb-20'>
          Complete the OTP verification process to claim the product collectible
        </p>
        <div className='flex my-3 mx-16 flex-col'>
          <PhoneInput
            autoComplete='off'
            name='phoneNumber'
            // Change the default country
            value={phoneNumber}
            defaultCountry='IT'
            placeholder='Enter phone number'
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
          <div className='text-[#9D9D9D] text-xl text-center my-3'>Or</div>
          <div>
            <div className=''>
              <input
                type='email'
                name='email'
                id='email'
                className={cs(
                  "bg-transparent border outline-none my-34 text-[#D0B47D] placeholder:text-[#A2A2A2] text-sm rounded-lg block w-full p-2.5",
                  getFieldClasses("email")
                )}
                placeholder='Email'
                autoComplete='off'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className='mt-4 font-bold bg-golden text-black py-3 px-12 rounded-3xl w-full flex justify-end items-baseline'
          onClick={ onClick }
        >
          Request OTP
        </button>
      </div>
    </div>
  );
}
