import Image from "next/image";
export default function Splash() {
  return (
    <main className="h-screen w-screen flex justify-center items-center ">
      <figure className=" w-full max-w-sm h-96 relative">
        <Image
          src={"/images/splash-logo.png"}
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
    </main>
  );
}
