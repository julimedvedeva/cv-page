import classNames from "classnames";
import React from "react";
import Icon from "../Icon/Icon";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
  title: string;
  text: string;
}

const Accordion: React.FC<IProps> = ({ isOpen, onClick, title, text }) => {
  return (
    <>
      <div
        className={classNames(
          "flex flex-col justify-between items-center transition-all duration-500 px-6 py-4 w-[412px] border-[#EAEAEA] border-[1px] rounded-[15px] overflow-hidden cursor-pointer",
          "sm:w-full",
          {
            "h-[184px] bg-[#D2854D]": isOpen,
            "h-[64px] bg-none": !isOpen,
          }
        )}
        onClick={onClick}
      >
        <div className="flex justify-between w-full">
          <span
            className={classNames(
              "font-halvar font-[400] text-2xl",
              {
                "text-[#2D2D2D]": isOpen,
                "text-[#EAEAEA]": !isOpen,
              }
            )}
          >
            {title}
          </span>
          <Icon
            src="/images/arrow.svg"
            className={classNames("h-8 w-8 transition-all", {
              "text-[#2D2D2D] rotate-0" : isOpen,
              "text-[#EAEAEA] rotate-90" : !isOpen,
            })}
          />
        </div>
        <div
          className={classNames("opacity-0 mb-2 text-[#2D2D2D]", {
            "opacity-0": !isOpen,
            "opacity-100": isOpen,
          })}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default Accordion;
