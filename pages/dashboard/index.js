import React from "react";
import Header from "../../components/Header";
import DashBoardLayout from "../../components/DashBoard-Layout";
import { raleway } from "../../lib/utils";

const DashBoardIndex = () => {
  return (
    <div className={raleway.className}>
      <Header />
      <DashBoardLayout />
    </div>
  );
};

export default DashBoardIndex;
