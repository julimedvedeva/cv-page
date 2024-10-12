import React from "react";

import styles from "./AnimationButton.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useIntl } from "@/queries";

import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  className?: string;
}

const AnimationButton: React.FC<IProps> = ({ className }) => {
  const intl = useIntl();

  return (
    <AnimatePresence>
      {!!intl.data && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
        >
          <Link href="https://t.me/iamtoxa" target="_blank">
            <div
              className={classNames(
                "flex justify-center items-center group h-[210px] w-[210px] bg-[#404040] rounded-full border-[#666666] border-[1.5px]",
                className
              )}
            >
              {/* <img src="/images/text-round.svg" className={classNames("w-[190px] h-[188px] absolute", styles.text)}/> */}

              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames(
                  "w-[200px] h-[200px] absolute",
                  styles.text
                )}
              >
                <path
                  id="circlePath"
                  d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href="#circlePath"
                    fill="currentColor"
                    method="stretch"
                    spacing="auto"
                    textLength="240"
                  >
                    {`${intl.data["talk"]} ${intl.data["talk"]}`}
                  </textPath>
                </text>
              </svg>

              <div className="border-[#666666] border-[1.5px] h-[144px] w-[144px] rounded-full flex justify-center items-center">
                <img
                  src="/images/arrow.svg"
                  className="h-[54px] w-[54px] group-hover:rotate-90 relative transition-all"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimationButton;
