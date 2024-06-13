"use client";

import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import { data } from "./constants";


import styles from './Cards.module.scss'
import Tag from "../Tag/Tag";
import Link from "next/link";


interface IProps {}

const Cards: React.FC<IProps> = ({}) => {

    const circle = useRef<HTMLDivElement>(null)

    const followCursor = (e: MouseEvent) => {
        if (!circle.current) {
            return;
        }

        circle.current.style.left = (e.clientX - (circle.current.parentElement?.getBoundingClientRect().x || 0)) + 'px'
        circle.current.style.top = (e.clientY - (circle.current.parentElement?.getBoundingClientRect().y || 0))+ 'px'
    }

    useEffect(() => {
        window.addEventListener('mousemove', followCursor)

        return(() => {
            window.removeEventListener('mousemove', followCursor)
        })
    }, [])

  return (
    <div className={classNames("flex gap-6", styles.cards)}>
        <div className="flex relative cursor-pointer overflow-hidden flex-col justify-between h-[264px] min-w-[500px] bg-[#EAEAEA] rounded-[20px] py-[24px] pl-[32px] pr-[24px]" >
            <p className="w-[254px] font-halvar font-[400] text-[40px] leading-[46px] text-[#2D2D2D] z-[3] relative">Мой опыт. Проекты.</p>
            <div className="flex justify-end z-[3] relative">
                <Icon src="/images/arrow.svg" className="w-[48px] h-[48px] text-[#2D2D2D]"/>
            </div>
            <div className={styles.cards__follow_cursor} ref={circle}/>
        </div>
        <div className="flex flex-wrap gap-4 justify-end h-[264px] min-w-[510px] rounded-[20px] px-6 py-6 border-[1px] border-[#EAEAEA] " >
            {data.map((item, index)=>(
                <Tag key={index}>
                    {item}
                </Tag>
            ))}
        </div>
        <Link href='https://t.me/iamtoxa' target="_blank">
            <div className="flex flex-col justify-between group h-[264px] min-w-[328px] bg-[#EAEAEA] rounded-[20px] py-[24px] pl-[32px] pr-[24px] cursor-pointer" >
                <p className="w-[254px] font-halvar font-[400] text-[32px] leading-[37px] text-[#2D2D2D]">Связаться со мной</p>
                <div className="flex justify-end">
                    <div className="flex items-center justify-center border-[1px] border-[#2D2D2D] w-[114px] h-[114px] rounded-full group-hover:bg-[#D2854D] cursor-pointer transition-all duration-300">
                        <Icon src="/images/arrow.svg" className="w-[48px] h-[48px] text-[#2D2D2D]"/>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default Cards;
