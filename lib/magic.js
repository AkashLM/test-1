import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { ethers } from "ethers";

const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.maticvigil.com/", // Polygon RPC URL
  chainId: 80001, // Polygon chain id
};

let magicClient, provider;

if (typeof window !== "undefined") {
  magicClient = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY, {
    network: customNodeOptions,
    extensions: [new OAuthExtension()],
  });
  // provider = new ethers.providers.Web3Provider(magicClient.rpcProvider);
}

export async function getUserMetadata() {
  const userMeta = await magicClient.user.getMetadata();
  const userData = { walletAddress: userMeta.publicAddress, ...userMeta };
  console.log(userData);
  return userData;
}

export async function getRedirectResult() {
  try {
    const result = await magicClient.oauth.getRedirectResult();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function loginWithPhone(phone) {
  try {
    console.log("Loggin in with phone..");
    const DID = await magicClient.auth.loginWithSMS({
      phoneNumber: phone,
    });

    //get the userdata
    const userMeta = await magicClient.user.getMetadata();

    const userData = { walletAddress: userMeta.publicAddress, ...userMeta };
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export async function loginWithSocials(social) {
  try {
    console.log(`logging in with ${social}`);

    await magicClient.oauth.loginWithRedirect({
      provider: social /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: "http://localhost:3000/loading",
    });

    // const result = await magicClient.oauth.getRedirectResult();
    // console.log(result);

    // const userMeta = await magicClient.user.getMetadata();

    // const userData = { walletAddress: userMeta.publicAddress, ...userMeta };
    // console.log(userData);
    // return userData;

    // make api call to check if user exits. If so, return user to update the userContext
  } catch (error) {
    console.log(error);
  }
}

export { magicClient };
