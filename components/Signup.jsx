import { magicClient, getUserMetadata, loginWithSocials } from "../lib/magic";
import { connectMetamask } from "../lib/metamsk";
import { useEffect } from "react";
import DiamondBg from "./UI/DiamondBg";
import PhoneInputComp from "./PhoneInputComp";
import SocialLoginCard from "./UI/SocialLoginCard";
import Link from "next/link";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import MetamaskIcon from "./UI/MetamaskIcon";

export default function Signup() {
  const { updateUser } = useContext(UserContext);
  async function handleLogin(type) {
    if (type === "metamask") {
      try {
        const walletAddress = await connectMetamask();

        console.log(walletAddress);
        updateUser({ publicAddress: walletAddress });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await loginWithSocials(type);
        // update userContext
        // updateUser(userData);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <main className="text-xl text-white flex justify-center items-center">
      <DiamondBg />
      <section className=" p-2 mt-10 w-full h-full max-w-md flex flex-col gap-5 items-center lg:bg-black rounded-xl shadow-xl relative z-10 lg:p-5 lg:mt-20">
        <h1 className="mb-2">Sign up</h1>
        <PhoneInputComp />
        <div className="my-4 border-t border-gray-300 w-full relative isolate">
          <div className="px-2 text-gray-300 text-2xl tracking-wider bg-nav-gray lg:bg-black absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            Or
          </div>
        </div>
        <SocialLoginCard
          title="Google"
          subTitle={"Sign Up with Google"}
          handleLogin={() => handleLogin("google")}
        >
          <FcGoogle size={40} />
        </SocialLoginCard>
        <SocialLoginCard
          title="Apple"
          subTitle={"Sign Up with Apple"}
          handleLogin={() => handleLogin("apple")}
        >
          <BsApple size={40} />
        </SocialLoginCard>
        <SocialLoginCard
          title="Metamask"
          subTitle={"Browser extension"}
          handleLogin={() => handleLogin("metamask")}
        >
          <MetamaskIcon height={40} width={40} />
        </SocialLoginCard>

        <div className="flex items-center">
          <p className="text-sm text-gray-400">What is Metamask?</p>
          <RxCaretDown size={30} color="gray" />
        </div>

        <div className="flex items-baseline gap-1 lg:hidden ">
          <p className="mt-10 text-sm  text-gray-400">
            Already have an account?
          </p>
          <div>
            <Link className="text-sm text-gray-300 hover:text-white" href="/">
              Log In Here{" "}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
