import { ethers } from "ethers";

export async function connectMetamask() {
  let signer = null;

  let provider;

  try {
    if (window.ethereum == null) {
      // If MetaMask is not installed
      console.log("MetaMask not installed");
    } else {
      provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      signer = provider.getSigner();
      const walletAddress = await signer.getAddress();
      console.log(walletAddress);

      return walletAddress;
    }
  } catch (error) {
    console.log(error);
  }
}
