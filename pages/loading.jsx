import { getUserMetadata } from "../lib/magic";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { magicClient, getRedirectResult } from "../lib/magic";
import axios from "axios";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useRouter } from "next/router";
import { SERVER_URL } from "../components/config";

export default function Loading() {
  const router = useRouter();

  const { updateUser } = useContext(UserContext);

  async function checkUser(publicAddress) {
    // api call to see if the user exits in the DB
    try {
      const userCheck = await axios.post(`${SERVER_URL}/api/login`, {
        RES_PublicAddr: publicAddress,
      });

      return userCheck.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUserData() {
    console.log("getting result");
    const result = await getRedirectResult();
    console.log(result);

    const { publicAddress } = result.magic.userMetadata;

    const user = checkUser(publicAddress);

    if (user) {
      updateUser(user);
    } else {
      updateUser({ publicAddress });
      router.push("/create-profile");
    }

    // await magicClient.user.logout();
  }

  useEffect(() => {
    updateUserData();
  }, []);

  return (
    <main className="flex justify-center items-center text-white bg-black w-screen h-screen">
      {/* <h1 className="text-3xl font-bold">Loading....</h1>
       */}
      <LoadingSpinner />
    </main>
  );
}
