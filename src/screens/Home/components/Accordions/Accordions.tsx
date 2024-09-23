"use client";

import React, { useState } from "react";
import classnames  from "classnames";
import Accordion from "@/components/Accordion";

import styles from './Accordions.module.scss'

interface IProps {}

const Accordions: React.FC<IProps> = ({}) => {
    const [openStates, setOpenStates] = useState(false);

  return (
    <div className={classnames("flex justify-between gap-6", styles.info)}>
      <div className="flex flex-col gap-4">
        <Accordion
          isOpen={openStates}
          title="Разработка"
          onClick={() => setOpenStates(!openStates)}
          text="Создание и настройка продукта с нуля. Чистый, поддерживаемый код, адаптивная вертска."
        />

        <Accordion
          isOpen={!openStates}
          title="Поддержка"
          onClick={() => setOpenStates(!openStates)}
          text="Поддержка и развитие уже готового продукта. Рефакторинг кода, рекомендации по улучшению работы готового сайта."
        />
      </div>
    </div>
  );
};

export default Accordions;
