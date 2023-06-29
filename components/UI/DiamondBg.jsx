import Image from "next/image";
export default function DiamondBg() {
  return (
    <figure className=" hidden lg:block ">
      <Image
        src="/images/diamond-bg.png"
        fill
        style={{
          objectFit: "cover",
          opacity: "1",
          objectPosition: "top",
          // top: 50,
        }}
      />
    </figure>
  );
}
