import React from "react";
import {Oval} from "react-loader-spinner";

const SpinnerLoader = ({ visible, style }) => {
  return (
    <div className='flex justify-center items-center'>
      <Oval
        height={30}
        width={30}
        color='gray'
        wrapperStyle={{}}
      wrapperClass=''
        visible={visible}
        ariaLabel='oval-loading'
        secondaryColor='black'
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};

export default SpinnerLoader;
