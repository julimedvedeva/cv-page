'use client'

import AnimationButton from "@/components/AnimationButton/AnimationButton";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Accordion from "@/components/Accordion/Accordion";
import { useState } from "react";
import Cards from "@/components/Cards/Cards";

export default function Home() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-full relative flex flex-col justify-between gap-2 h-screen pt-[36px] pb-[32px] pl-[32px]">
        <div className="flex flex-col items-start gap-2 pl-[64px]">
          <span
            className={classNames(
              "text-[96px] leading-[111px] text-[#FAFAFA] font-halvar font-[500]",
              styles.text
            )}
          >
            МЕДВЕДЕВ АНТОН
          </span>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-[30px] items-center">
              <div
                className={classNames(
                  "bg-[#EAEAEA] w-[174px] h-[2px]",
                  styles.text_right
                )}
              />
              <span
                className={classNames(
                  "text-[48px] leading-[56px] text-[#FAFAFA] font-halvar font-[200]",
                  styles.text_sub
                )}
              >
                web-разработчик
              </span>
            </div>
            <span
              className={classNames(
                "text-right w-[324px] text-[20px] leading-6 font-[400] text-[#FAFAFA]",
                styles.text_opacity
              )}
            >
              Помогаю бизнесу запускать и развивать свои продукты
            </span>
          </div>
        </div>
        <img
          src="/images/arrow-2.svg"
          className="absolute top-[166px] right-[378px]"
        />
        <AnimationButton className="absolute top-[25%] right-[8%]" />
        <div className={classNames("flex justify-between gap-6", styles.info)}>
          <div className="flex flex-col gap-4">
            <Accordion 
              isOpen={isOpen} 
              title="Разработка" 
              onClick={() => setIsOpen(!isOpen)}
              text='Создание и настройка продукта с нуля. Чистый, поддерживаемый код, адаптивная вертска.'
              />
            <Accordion 
              isOpen={!isOpen} 
              title="Поддержка" 
              onClick={() => setIsOpen(!isOpen)}
              text='Поддержка и развитие уже готового продукта. Рефакторинг кода, рекомендации по улучшению работы готового сайта.'
            />
          </div>
          <Cards/>
        </div>
      </div>
    </main>
  );
}
