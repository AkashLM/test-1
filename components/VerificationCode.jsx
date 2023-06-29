import OTPInput from "react-otp-input";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { SERVER_URL } from "./config";

export default function VerificationCode({ isEmail, value }) {
  const [otp, setOtp] = useState("");
  const { user } = useContext(UserContext);
  const { publicAddress } = user;

  function formatValue(input) {
    return (
      input.slice(0, 3) +
      "*****" +
      (isEmail ? input.slice(-7) : input.slice(-4))
    );
  }

  // ============= function to airdrop the NFT ===============
  // call this function when OTP verification is successful
  async function airdropNFT() {
    try {
      const response = await axios.post(`${SERVER_URL}/api/mint`, {
        wallet: publicAddress,
      });

      if (response.message === "NFT Minted") {
        //show the MintSuccessful component
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <main className="flex flex-col gap-4 items-center text-white">
      <h1 className="font-bold text-2xl">Enter Verficaion Code</h1>
      <p className="text-[#9D9D9D] text-center">
        {`Check your ${
          isEmail ? "mail" : "phone"
        }. We have sent you the OTP at `}
        <span className="block text-golden">{formatValue(value)}</span>
      </p>
      <form className="mt-20 flex flex-col items-center gap-10 w-full h-full">
        <OTPInput
          numInputs={4}
          value={otp}
          onChange={setOtp}
          renderInput={(props) => <input {...props} />}
          renderSeparator={() => <span className="invisible">......... </span>}
          containerStyle={{}}
          inputStyle={{
            backgroundColor: "#1D1C1C",
            color: "#D0B47D",
            outline: "none",
            fontSize: "44px",
            borderBottom: "2px solid",
            borderColor: "#D0B47D",
          }}
          className="bg-inherit text-black"
        />
        <button
          className="mt-auto bg-golden text-black font-bold py-3 px-12 rounded-3xl w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
