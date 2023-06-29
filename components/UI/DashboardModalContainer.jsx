import Image from "next/image";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";

export default function DashboardModalContainer({ img, onClose, children }) {
  function handleClose() {
    onClose();
  }
  return (
    <main className=" flex items-center justify-center min-w-full absolute inset-0">
      <div className="  lg:absolute lg:inset-0 bg-black opacity-80 z-10"></div>
      <section className="w-full flex flex-col lg:flex-row absolute z-50 inset-0 bg-[#1D1C1C] lg:p-4 lg:max-h-[550px] lg:m-auto lg:max-w-5xl lg:rounded-3xl ">
        <div className="hidden lg:inline absolute z-50 right-4">
          <AiOutlineClose
            size={15}
            // color="white"
            onClick={handleClose}
            className=" cursor-pointer text-gray-300 hover:text-white hover:scale-110 transition-all"
          />
        </div>
        <figure className=" w-full h-1/2 lg:w-1/2 lg:h-[495px] lg:rounded-3xl relative isolate">
          <div className="lg:hidden absolute top-4 left-4 z-20 p-3 bg-[#1D1C1C] rounded-[4px]">
            <AiOutlineLeft size={15} className=" text-golden" />
          </div>
          <Image
            fill
            src={"/images/bags/bag-1.png"}
            className="lg:rounded-3xl object-cover object-center z-10"
          />
        </figure>
        <div className="lg:w-1/2 mx-2 p-4 h-auto rounded-t-xl -translate-y-4 bg-inherit">
          {children}
        </div>
      </section>
    </main>
  );
}
