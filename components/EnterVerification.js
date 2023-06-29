import React, { useState } from "react";
import OtpInput from "react-otp-input";

const EnterVerification = ({ onClick }) => {
  const [otp, setOtp] = useState("");

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

  return (
    <div className='flex flex-col justify-between h-full items-center text-white'>
      <div className=''>
        <div className='text-2xl mb-6'>Enter verification Code</div>
        <div>Check your mobile. We have sent you the OTP at</div>
        <div className='text-[#D9BA80] text-center'>+91 ******3210</div>
      </div>
      <div>
        <OtpInput
          value={otp}
          onChange={(value) => setOtp(value)}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            fontSize: 42,
            color: "#D0B47D",
            backgroundColor: "transparent",
            borderBottom: "1px solid #D0B47D",
            margin: 10,
            outline: "none",
          }}
        />
        <div className='text-[#D9BA80] text-sm text-center mt-3 cursor-pointer' onClick={onClick}>Resend OTP</div>
      </div>
      <div>
        <button
          className='mt-4 font-bold bg-golden text-black py-3 px-12 rounded-3xl w-full flex justify-end items-baseline'
          onClick={onClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EnterVerification;
