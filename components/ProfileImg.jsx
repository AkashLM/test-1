import Image from "next/image";
export default function ProfileImg({ img, width, height }) {
  return (
    <div
      className={`relative w-[55px] h-[55px] border-2 border-white rounded-full `}
    >
      <Image
        src={img}
        fill
        // width={71}
        // height={50}
        className="rounded-full "
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
