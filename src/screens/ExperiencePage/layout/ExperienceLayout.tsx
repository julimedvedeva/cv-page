/* eslint-disable @next/next/no-img-element */

import React from "react";

import NextLink from "next/link";
import Link from "./components/Link";
import Icon from "@/components/Icon";

interface IProps {}

const ExperienceLayout: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
}) => {
  return (
    <main className="relative w-full h-full flex flex-1 flex-col justify-between max-w-[1440px] px-8 py-6 sm:min-h-[1080px] font-halvar">
      <div className="flex justify-between z-10 pointer-events-none">
        <div className="flex flex-col text-[48px] text-white font-normal w-fit">
          <Link url="/experience/main">Мой опыт</Link>
          <Link url="/experience/projects">Проекты</Link>
          <Link url="/experience/tech">Технологии</Link>
        </div>

        <div>
          <NextLink href="/">
            <div className="items-center w-fit gap-4 text-[#FAFAFA] text-[32px] flex justify-end hover:text-[#D2854D] pointer-events-auto transition-all">
              <Icon
                className="w-8 h-8 text-inherit mt-[1px]"
                src="/images/back-arrow.svg"
              />
              <span>главная</span>
            </div>
          </NextLink>
        </div>
      </div>

      <div>{children}</div>
    </main>
  );
};

export default ExperienceLayout;
