import Image from "next/image";
import Link from "next/link";
import MedalStar from "./icons/MedalStar";
export default function MyNftCard({ img }) {
  return (
    <Link
      className="w-[165px] h-[214px] lg:w-[439px] lg:h-[300px] shrink-0 grow-1 rounded-2xl"
      href=""
    >
      <figure className="relative isolate h-full w-full">
        <Image
          src={img}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "5",
            borderRadius: "1rem",
          }}
        />
        <div className="absolute bottom-4 right-4 z-10 ">
          <MedalStar />
        </div>
      </figure>
    </Link>
  );
}
