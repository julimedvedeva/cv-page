import React, { FC } from "react";

interface IProps {}

const Tag: FC<React.PropsWithChildren<IProps>> = ({ children }) => {
  return (
    <div className="flex justify-center items-center px-6 h-[60px] rounded-[30px] outline-[#FAFAFA] outline outline-1 text-[22px] leading-[28px] text-[#FAFAFA] font-halvar hover:bg-[#D2854D] cursor-pointer transition-all">
      {children}
    </div>
  );
};

export default Tag;
