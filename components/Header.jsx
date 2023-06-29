import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <main className=" mt-10 py-5 flex justify-between items-center bg-[#0D0D0D] border-y border-golden lg: px-4 lg:border-t-0 lg:justify-between lg:mt-0 relative z-10">
      <Link href="/">
        <Image src="/images/luxo-nav.svg" width={180} height={52} />
      </Link>
      <Nav />
    </main>
  );
}
