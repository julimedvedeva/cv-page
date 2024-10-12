"use client";

import React, { useState } from "react";
import classnames from "classnames";
import Accordion from "@/components/Accordion";

import styles from "./Accordions.module.scss";
import { useInfoData } from "@/queries";
import Intl from "@/components/Intl";

interface IProps {}

const Accordions: React.FC<IProps> = ({}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const infoQuery = useInfoData();

  if (!infoQuery) {
    return null;
  }

  return (
    <div className={classnames("flex justify-between gap-6", styles.info)}>
      <div className="flex flex-col gap-4 flex-1">
        {infoQuery.data?.map((el, index) => (
          <Accordion
            key={index}
            isOpen={openIndex === index}
            title={<Intl value={el.title} />}
            onClick={() => setOpenIndex(index)}
            text={<Intl value={el.text} />}
          />
        ))}
      </div>
      <div className="flex-1" />
      <div className="flex-1" />
    </div>
  );
};

export default Accordions;
