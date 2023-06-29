import React, { useState } from "react";
import Header from "./Header";
import DashboardDefault from "./DefaultDashboard";
import ClaimNft from "./claim-nft";
import { raleway } from "../lib/utils";
import DashboardModalContainer from "./UI/DashboardModalContainer";

const DashBoardLayout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [currentWindow, setCurrentWindow] = useState(0);

  const navigateHandler1 = () => {
    setCurrentWindow(1);
  };
  const navigateHandler2 = () => {
    setCurrentWindow(2);
  };
  const navigateHandler3 = () => {
    setCurrentWindow(3);
  };

  return (
    <div className={raleway.className}>
      {modalOpen && (
        <DashboardModalContainer
          onClose={() => setModalOpen(false)}
        ></DashboardModalContainer>
      )}{" "}
      <div className="flex my-10">
        <div
          className={`${
            currentWindow === 1 && "bg-[url(../assets/bgActive.svg)] bg-center"
          } bg-[#D0B47D]/5 w-[160px] font-[Raleway] text-xl mx-1 text-[#D0B47D] py-4 rounded-2xl border border-[gray] cursor-pointer`}
          onClick={navigateHandler1}
        >
          <div>
            <div className="my-5 flex justify-center items-center ">
              <svg
                width="33"
                height="42"
                viewBox="0 0 33 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${currentWindow === 1 && "fill-white"}`}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.7187 8.68436C18.8148 8.19156 17.8017 7.93335 16.7722 7.93335C15.7427 7.93335 14.7296 8.19156 13.8257 8.68436L3.98689 14.048C3.01613 14.5777 2.20599 15.3592 1.64165 16.3102C1.0773 17.2613 0.779581 18.3468 0.779785 19.4527V29.5849C0.779581 30.6908 1.0773 31.7763 1.64165 32.7274C2.20599 33.6784 3.01613 34.4599 3.98689 34.9896L13.8257 40.3533C14.7296 40.846 15.7427 41.1043 16.7722 41.1043C17.8017 41.1043 18.8148 40.846 19.7187 40.3533L29.5555 34.9896C30.5267 34.4602 31.3372 33.6788 31.9019 32.7278C32.4666 31.7767 32.7647 30.691 32.7647 29.5849V19.4506C32.7647 18.3445 32.4666 17.2589 31.9019 16.3078C31.3372 15.3567 30.5267 14.5754 29.5555 14.046L19.7187 8.68436ZM16.7722 18.3631C16.1895 18.3631 15.7996 19.0608 15.0199 20.4622L14.8188 20.8234C14.5972 21.2214 14.4864 21.4184 14.3141 21.5497C14.1397 21.681 13.9242 21.7303 13.4933 21.8267L13.1034 21.917C11.5891 22.2597 10.832 22.43 10.6514 23.0086C10.4709 23.5893 10.9879 24.1926 12.02 25.3991L12.2868 25.711C12.5802 26.0536 12.7279 26.2239 12.7936 26.4373C12.8593 26.6507 12.8367 26.8785 12.7936 27.3361L12.7526 27.7526C12.5966 29.3633 12.5187 30.1697 12.9885 30.5267C13.4605 30.8838 14.1704 30.5575 15.5883 29.905L15.9535 29.7368C16.3577 29.5521 16.5588 29.4598 16.7722 29.4598C16.9856 29.4598 17.1867 29.5521 17.5909 29.7368L17.9562 29.905C19.374 30.5596 20.084 30.8838 20.5559 30.5267C21.0278 30.1697 20.9478 29.3633 20.7919 27.7526L20.7508 27.3361C20.7078 26.8785 20.6852 26.6507 20.7508 26.4373C20.8165 26.226 20.9642 26.0536 21.2577 25.711L21.5244 25.3991C22.5565 24.1926 23.0736 23.5893 22.893 23.0086C22.7125 22.43 21.9553 22.2597 20.441 21.917L20.0511 21.8267C19.6203 21.7303 19.4048 21.6831 19.2304 21.5497C19.058 21.4184 18.9472 21.2214 18.7256 20.8234L18.5245 20.4622C17.7448 19.0628 17.355 18.3631 16.7722 18.3631Z"
                  fill="#D0B47D"
                  className={`${currentWindow === 1 && "fill-white"}`}
                />
                <path
                  d="M14.7193 0.921631H18.8231C22.6929 0.921631 24.6258 0.921631 25.8282 2.12404C27.0306 3.32645 27.0306 5.25933 27.0306 9.1292V9.16613L21.1909 5.9816C19.8351 5.2424 18.3155 4.85508 16.7712 4.85508C15.2269 4.85508 13.7073 5.2424 12.3514 5.9816L6.51172 9.16613V9.1292C6.51172 5.25933 6.51172 3.32645 7.71413 2.12404C8.91654 0.921631 10.8494 0.921631 14.7193 0.921631Z"
                  fill="#D0B47D"
                  className={`${currentWindow === 1 && "fill-white"}`}
                />
              </svg>
            </div>
            <div className="text-center">Claim</div>
            <div className="text-center">Collectible</div>
          </div>
        </div>

        <div
          className={`${
            currentWindow === 2 && "bg-[url(../assets/bgActive.svg)] bg-center"
          } bg-[#D0B47D]/5 w-[160px] font-[Raleway] text-xl mx-1 text-[#D0B47D] py-4 rounded-2xl border border-[gray] cursor-pointer`}
          onClick={navigateHandler2}
        >
          <div>
            <div className="my-5 flex justify-center items-center">
              <svg
                width="33"
                height="36"
                viewBox="0 0 33 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${currentWindow === 2 && "fill-white"}`}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8654 1.45004C15.0279 0.201549 17.6922 0.201548 19.8546 1.45004L29.0062 6.73373C31.1687 7.98223 32.5008 10.2895 32.5008 12.7865V23.3539C32.5008 25.8509 31.1687 28.1582 29.0062 29.4067L19.8546 34.6904C17.6922 35.9389 15.0279 35.9389 12.8654 34.6904L3.71382 29.4067C1.55137 28.1582 0.219238 25.8509 0.219238 23.3539V12.7865C0.219238 10.2895 1.55137 7.98223 3.71382 6.73373L12.8654 1.45004ZM11.8979 22.4392L13.6642 15.4669L20.8227 13.7004L18.7774 20.7658L11.8979 22.4392Z"
                  fill="#D0B47D"
                  className={`${currentWindow === 2 && "fill-white"}`}
                />
              </svg>
            </div>
            <div className="text-center">Discover</div>
            <div className="text-center">Collectible</div>
          </div>
        </div>
        <div
          className={`${
            currentWindow === 3 && "bg-[url(../assets/bgActive.svg)] bg-center"
          } bg-[#D0B47D]/5 w-[160px] font-[Raleway] text-xl mx-1 text-[#D0B47D] py-4 rounded-2xl border border-[gray] cursor-pointer`}
          onClick={navigateHandler3}
        >
          <div>
            <div className="my-5 flex justify-center items-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${currentWindow === 3 && "fill-white"}`}
              >
                <path
                  d="M15.844 3.20617C17.7653 2.09694 20.1324 2.09694 22.0536 3.20617L31.2052 8.48986C33.1265 9.5991 34.31 11.649 34.31 13.8675V24.4349C34.31 26.6534 33.1265 28.7033 31.2052 29.8126L22.0536 35.0962C20.1324 36.2055 17.7653 36.2055 15.844 35.0962L6.6924 29.8126C4.77115 28.7033 3.58761 26.6534 3.58761 24.4349V13.8675C3.58761 11.6491 4.77115 9.5991 6.6924 8.48986L15.844 3.20617Z"
                  fill="#D0B47D"
                  stroke="#D0B47D"
                  stroke-width="1.55918"
                  className={`${currentWindow === 3 && "fill-white"}`}
                />
                <path
                  d="M10.6475 23.9941V27.4523H14.1057L24.3054 17.2527L20.8471 13.7944L10.6475 23.9941ZM26.9798 14.5783C27.0653 14.493 27.1331 14.3917 27.1794 14.2801C27.2256 14.1685 27.2495 14.0489 27.2495 13.9282C27.2495 13.8074 27.2256 13.6878 27.1794 13.5762C27.1331 13.4647 27.0653 13.3633 26.9798 13.278L24.8218 11.12C24.7365 11.0345 24.6351 10.9667 24.5236 10.9204C24.412 10.8742 24.2924 10.8503 24.1716 10.8503C24.0509 10.8503 23.9313 10.8742 23.8197 10.9204C23.7081 10.9667 23.6068 11.0345 23.5215 11.12L21.8338 12.8077L25.2921 16.266L26.9798 14.5783Z"
                  fill="#0D0D0D"
                />
              </svg>
            </div>
            <div className="text-center">Create</div>
            <div className="text-center">NFTs</div>
          </div>
        </div>
      </div>
      {currentWindow === 1 ? <ClaimNft /> : <DashboardDefault />}
    </div>
  );
};

export default DashBoardLayout;
