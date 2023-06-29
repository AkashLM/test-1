import React, { useState } from "react";
import ArrivalCards from "./ArrivalCards";
import Header from "./Header";
import { useMediaQuery } from "react-responsive";
import ArrivalMobileCards from "./ArrivalMobileCards";
import BrewingCards from "./BrewingCards";
import BrewingMobileCards from "./BrewingMobileCards";
import DashboardModalContainer from "./UI/DashboardModalContainer";
import CustomerVerification from "./CustomerVerification";
import VerificationCode from "./VerificationCode";
import MintSuccessful from "./MintSuccessful";
import { raleway } from "../lib/utils";
import { useRouter } from "next/router";

const DashboardDefault = () => {
  const router = useRouter();

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div className=''>
      <div className='text-white text-2xl font-[Raleway] ml-4'>
        What is brewing
      </div>
      <div>
        <div>
          {isMobile !== true ? <BrewingCards /> : <BrewingMobileCards />}
        </div>
      </div>
      <div className='text-white text-2xl font-[Raleway] ml-4 my-5'>
        New Arrivals
      </div>
      <div>{isMobile !== true ? <ArrivalCards /> : <ArrivalMobileCards />}</div>
    </div>
  );
};

export default DashboardDefault;
