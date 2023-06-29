import React, { useState } from "react";
import Image from "next/image";
import arrival1 from "../assets/claim/img1.png";
import arrival2 from "../assets/claim/img2.png";
import arrival3 from "../assets/claim/img3.png";
import arrival4 from "../assets/claim/img4.png";
import arrival5 from "../assets/claim/img5.png";
import arrival6 from "../assets/claim/img6.png";
import DashboardModalContainer from "../components/UI/DashboardModalContainer";
import CustomerVerification from "./CustomerVerification";
import EnterVerification from "./EnterVerification";
import MintSuccessful from "./MintSuccessful";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { contractABI, contractAddress } from "../contracts/lib";
import { ethers } from "ethers";

const ClaimNft = () => {
  const images = [arrival1, arrival2, arrival3, arrival4, arrival5, arrival6];
  const [modalOpen, setModalOpen] = useState(0);

  //user context
  const userContext = useContext(UserContext);

  const navigateHandler1 = () => {
    setModalOpen(1);
  };
  const navigateHandler2 = () => {
    setModalOpen(2);
  };
  const navigateHandler3 = () => {
    setModalOpen(3);
  };
  const navigateHandler4 = () => {
    setModalOpen(4);
  };
  const navigateHandler5 = () => {
    setModalOpen(5);
  };

  const ModalContent = (
    <>
      <div className="flex flex-col font-[Raleway] justify-between h-full">
        <div>
          <div className="text-white mb-6 text-2xl">
            Pinko Exclusive blue leather Love bag Collectible
          </div>
          <span className="px-4 py-2 bg-[#28231C] rounded-lg text-[#D0B47D]">
            COLLECTIBLE
          </span>
          <div className="text-[#9D9D9D] my-6">
            Mini Love Bag One in soft, silky leather. The fastening is
            embellished with the iconic metal Love Birds Diamond Cut buckle. The
            accessory boasts a suede microfibre-lined interior, complete with a
            zipped centre divider pocket and leather slip pocket.
          </div>
          <div>
            <div className="text-[#9D9D9D] ">Product ID : </div>
            <div className="text-[#9D9D9D] ">Tier :</div>
          </div>
        </div>
        <div>
          <button
            className="mt-4 font-bold bg-golden text-black py-3 px-12 rounded-3xl w-full"
            onClick={navigateHandler2}
          >
            Claim Collectible
          </button>
        </div>
      </div>
    </>
  );

  const Modal1 = (
    <DashboardModalContainer onClose={() => setModalOpen(false)}>
      {ModalContent}
    </DashboardModalContainer>
  );

  const Modal2 = (
    <DashboardModalContainer onClose={() => setModalOpen(false)}>
      <CustomerVerification onClick={navigateHandler3} />
    </DashboardModalContainer>
  );

  const Modal3 = (
    <DashboardModalContainer onClose={() => setModalOpen(false)}>
      <EnterVerification onClick={navigateHandler4} />
    </DashboardModalContainer>
  );

  const Modal4 = (
    <DashboardModalContainer onClose={() => setModalOpen(false)}>
      <MintSuccessful onClick={navigateHandler5} />
    </DashboardModalContainer>
  );

  return (
    <div>
      {modalOpen === 1 && Modal1}
      {modalOpen === 2 && Modal2}
      {modalOpen === 3 && Modal3}
      {modalOpen === 4 && Modal4}
      <div className="flex flex-wrap justify-between">
        {images.map((img, index) => (
          <div key={index} className="mx-1 max-lg:w-[47%] lg:w-[32%] ">
            <Image
              src={img}
              alt="imgs"
              key={index}
              className="m-2 mx-1 cursor-pointer"
              onClick={() => setModalOpen(1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimNft;
