import { HiOutlineCheckCircle } from "react-icons/hi";
import CheckCircle from "./UI/icons/CheckCircle";

export default function MintSuccessful() {
  return (
    <main className="flex flex-col gap-4 items-center text-white">
      <h1 className="font-bold text-2xl">Mint Successful</h1>
      <p className="text-[#9D9D9D] text-center">
        Congratulations! Your product NFT claim is successful! To view your NFT
        . download the Luxo app to discover more features and get exciting drops
        and prizes!
      </p>
      <section className="mt-10 flex flex-col items-center w-full h-full">
        <CheckCircle />
        <button className="mt-10 bg-golden text-black  py-3 px-12 rounded-3xl w-full">
          View my NFT
        </button>
        <button className="mt-4 bg-golden text-black py-3 px-12 rounded-3xl w-full">
          Download App
        </button>
      </section>
    </main>
  );
}
