import Image from "next/image";

export default function SocialLoginCard({
  title,
  subTitle,
  children,
  handleLogin,
}) {
  return (
    <button
      onClick={handleLogin}
      className="p-4 w-full border border-gray-300 rounded-xl flex justify-between items-center hover:border-golden"
    >
      <div className="flex flex-col items-start">
        <h1 className=" text-base">{title}</h1>
        <p className=" text-sm text-gray-500">{subTitle}</p>
      </div>
      {children}
      {/* <figure className="relative w-14 h-14">
        <Image fill src={img} />
      </figure> */}
    </button>
  );
}
