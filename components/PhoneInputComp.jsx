import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../styles/Phone.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { handleLoginWithPhone } from "../lib/magic";

export default function PhoneInputComp() {
  const [phone, setPhone] = useState();
  const router = useRouter();

  async function handleLogin() {
    // await handleLoginWithPhone("+919486789237");
    // once login is successful, route to create profile
    router.push("/create-profile");
  }

  return (
    <main className="p-4 w-full border border-gray-300 rounded-xl hover:border-golden">
      <h1 className="text-base mb-2">Phone Number</h1>
      <div className="flex gap-4">
        <PhoneInput
          value={phone}
          onChange={setPhone}
          withCountryCallingCode={true}
          defaultCountry="US"
          placeholder="Enter phone number"
          numberInputProps={{
            className: "outline-none bg-transparent placeholder:text-[#A2A2A2]",
          }}
          className="bg-[#262626] flex flex-row-reverse  border my-34 text-[#D0B47D] border-[#262626] date-[#D0B47D] placeholder:text-[#A2A2A2] focus:outline-[#D0B47D] text-sm rounded-lg w-full p-2.5"
        />
        <button
          className="bg-gray-200 rounded-full text-black w-10 h-10 shrink-0  hover:scale-105 focus:scale-105"
          onClick={handleLogin}
        >
          {String.fromCharCode(8594)}
        </button>
      </div>
    </main>
  );
}
