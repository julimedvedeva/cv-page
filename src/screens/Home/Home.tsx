/* eslint-disable @next/next/no-img-element */

import React from "react";
import classnames from "classnames";

import NameGroup from "./components/NameGroup";
import ConnectButton from "./components/ConnectButton";
import Accordions from "./components/Accordions";
import Cards from "./components/Cards";

import styles from "./Home.module.scss";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <main className="relative w-full h-full flex flex-1 flex-col justify-between max-w-[1440px] px-8 py-6 sm:min-h-[1080px]">
      <div>
        <img
          src="/images/tags.svg"
          className="absolute top-[40%] left-[40%] sm:hidden"
          alt=""
        />
      </div>

      <NameGroup />

      <ConnectButton />

      <div className={classnames(styles.divider, "flex-1")} />

      <div className={classnames(styles.group)}>
        <Accordions />

        <div className={classnames(styles.spacer, "h-6")} />

        <Cards />
      </div>
    </main>
  );
};

export default Home;
