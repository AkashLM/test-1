import React from "react";

const BrownBtn = ({ text }) => {
  return (
    <div className='bg-[#D0B47D] rounded-full'>
      <button type='button' className='h-14 text-lg text-black font-bold'>
        {text}
      </button>
    </div>
  );
};

export default BrownBtn;
