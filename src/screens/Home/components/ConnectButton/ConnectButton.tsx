import React from "react";
import classnames from "classnames";
import AnimationButton from "@/components/AnimationButton";

import styles from "./ConnectButton.module.scss";
import { useIntl } from "@/queries";

interface IProps {}

const ConnectButton: React.FC<IProps> = ({}) => {
  const intl = useIntl();

  return (
    <div className={styles.connect}>
      <img
        src="/images/arrow-2.svg"
        className={classnames(styles.connect__arrow)}
      />


      <AnimationButton className={styles.connect__button} />
    </div>
  );
};

export default ConnectButton;
