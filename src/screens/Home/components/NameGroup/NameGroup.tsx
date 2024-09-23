import React from "react";
import classnames from "classnames";

import styles from "./NameGroup.module.scss";
import { data } from "./constants";

interface IProps {}

const NameGroup: React.FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <h1
        className={classnames(
          "text-[96px] sm:text-[48px] sm:leading-[55px] leading-[111px] text-[#FAFAFA] font-halvar font-[500] sm:font-[400]",
          styles.name
        )}
      >
        {data.name}
      </h1>

      <div className="flex flex-col items-end w-fit max-w-full gap-2">
        <div className="flex gap-[30px] xl:gap-[18px] items-center">
          <div
            className={classnames(
              "bg-[#EAEAEA] h-[2px] w-[174px] xl:w-[107px] sm:w-auto sm:flex-1",
              styles.text
            )}
          />

          <h2
            className={classnames(
              "text-[48px] leading-[56px] text-[#FAFAFA] font-halvar font-[200]",
              "xl:text-[36px] xl:leading-[42px]",
              "sm:!text-[24px] sm:!leading-[28px]",
              styles.text_sub
            )}
          >
            {data.subtitle}
          </h2>
        </div>

        <span
          className={classnames(
            "text-right w-[324px] text-[20px] leading-6 font-[400] text-[#FAFAFA]",
            "sm:!text-[16px] sm:!leading-[20px]",
            styles.text_opacity
          )}
        >
          {data.text}
        </span>
      </div>
    </div>
  );
};

export default NameGroup;
