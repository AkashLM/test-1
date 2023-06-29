import ProfileImg from "./ProfileImg";
import Link from "next/link";

function formatWallet(wallet) {
  return wallet.slice(0, 7) + "..." + wallet.slice(-2);
}
export default function ProfileInfo({ img, name, wallet }) {
  return (
    <main className="mt-2 flex flex-col justify-center items-center p-5 bg-diamonds bg-cover text-white w-full rounded-xl">
      <figure className=" mt-2 scale-150">
        <ProfileImg img="/images/profile.png" />
      </figure>
      <h1 className=" mt-4 text-2xl font-bold">{name}</h1>
      <p>
        wallet address: <span>{formatWallet(wallet)}</span>
      </p>
      <Link href="edit-profile" className="text-golden-dark">
        Edit Profile
      </Link>
    </main>
  );
}
