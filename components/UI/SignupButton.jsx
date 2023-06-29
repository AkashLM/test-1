import { magic } from "../../lib/magic";
import { Raleway } from "next/font/google";
import { useRouter } from "next/router";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

export default function SignupButton() {
  const router = useRouter();

  return (
    <button
      className={`${raleway.className} hidden bg-golden text-black font-bold py-3 px-12 rounded-3xl lg:inline`}
      onClick={() => router.push("/signup")}
    >
      Sign Up
    </button>
  );
}
