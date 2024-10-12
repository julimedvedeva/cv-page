"use client";

import { data } from "./constants";
import Link from "next/link";
import Icon from "@/components/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { chunkItems, groupBy } from "@/utils/array";
import { useRouter } from "next/router";

interface IProps {
  dataKey: keyof typeof data;
}

const ExperiencePage: React.FC<IProps> = ({ dataKey }) => {
  const [page, setPage] = useState(0);
  const router = useRouter();

  const pages = useMemo(() => {
    return chunkItems(data[dataKey].items, 4);
  }, [dataKey]);

  useEffect(() => {
    setPage(0);
  }, [dataKey]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    const keys = Object.keys(data);
    const currIndex = keys.findIndex((el) => el === dataKey)


    if(e.key === 'ArrowRight') {
      setPage((page) => Math.min(page + 1, pages.length - 1))
    }

    if(e.key === 'ArrowLeft') {
      setPage((page) => Math.max(0, page - 1))
    }

    if(e.key === 'ArrowUp') {
      const nextDataKey = keys[Math.max(0, Math.min(currIndex - 1, keys.length))]
      router.push(`/experience/${nextDataKey}`)
    }

    if(e.key === 'ArrowDown') {
      const nextDataKey = keys[Math.max(0, Math.min(currIndex + 1, keys.length))]
      router.push(`/experience/${nextDataKey}`)
    }
  }, [pages, dataKey, router])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [dataKey, handleKey])

  return (
    <div className="flex justify-between absolute top-0 w-full h-full py-6 -mx-9 px-9 items-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={dataKey}
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="text-[#BEBEBE] max-w-[430px] mr-6 font-neue">
            {data[dataKey].text}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex-1 flex flex-col justify-center pt-[100px] items-end h-full relative">
        {pages.length > 1 && (
          <motion.div
            layoutId="pagination"
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              duration: 0.5
            }}
            className="text-white flex gap-4 absolute bottom-0"
          >
            <button
              className="border-2 h-[68px] w-[68px] flex justify-center items-center rounded-lg disabled:opacity-50 transition-all"
              onClick={() => setPage((page) => page - 1)}
              disabled={page === 0}
            >
              <Icon
                className="w-8 h-8 text-inherit mt-[1px]"
                src="/images/back-arrow.svg"
              />
            </button>
            <button
              className="border-2 h-[68px] w-[68px] flex justify-center items-center rounded-lg disabled:opacity-50 transition-all"
              onClick={() => setPage((page) => page + 1)}
              disabled={page === pages.length - 1}
            >
              <Icon
                className="w-8 h-8 text-inherit mt-[1px] rotate-180"
                src="/images/back-arrow.svg"
              />
            </button>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${dataKey}.${page}`}
            initial={{ x: "20%", opacity: 0 }}
            animate={{
              x: "0",
              opacity: 1,
              height: "auto",
              transition: {
                opacity: {
                  duration: 0.5,
                },
                x: {
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              },
            }}
            exit={{
              x: "-10%",
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <div className="flex-1 flex flex-col gap-10 w-[900px]">
              {pages[page]?.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-end">
                    <span className="mr-4 text-[#FAFAFA] text-[32px]">
                      {item.title}
                    </span>

                    <div className="flex-1 h-[1px] bg-[#BEBEBE]" />
                  </div>

                  <div className="text-[24px] text-[#FAFAFA] text-right font-neue">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperiencePage;
