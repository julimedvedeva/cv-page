import React from "react";

import styles from './AnimationButton.module.scss'
import classNames from "classnames";
import Link from "next/link";

interface IProps {
  className?: string;
}

const AnimationButton: React.FC<IProps> = ({
  className
}) => {
  return (
    <Link href='https://t.me/iamtoxa' target="_blank">
      <div className={classNames('flex justify-center items-center group h-[210px] w-[210px] bg-[#404040] rounded-full border-[#666666] border-[1.5px]', className)}>
          <img src="/images/text-round.svg" className={classNames("w-[190px] h-[188px] absolute", styles.text)}/>
          <div className="border-[#666666] border-[1.5px] h-[144px] w-[144px] rounded-full flex justify-center items-center">
              <img src="/images/arrow.svg" className="h-[54px] w-[54px] group-hover:rotate-90 relative transition-all"/>
          </div>
      </div>
    </Link>
  );
};

export default AnimationButton;
