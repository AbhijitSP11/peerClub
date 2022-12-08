import React from "react";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";

import styles from "./styles.module.scss";

const Join = () => {
  return (
    <div className={styles.container}>
      <div className={styles.comm}>
        <h2>Join us on</h2>
        <BsWhatsapp style={{ color: "#01c767" }} size={30} />
      </div>
      <div className={styles.comm} style={{ borderBottomColor: "#1167b1" }}>
        <h2>Join us on</h2>
        <BsTelegram style={{ color: "#1167b1" }} size={30} />
      </div>
    </div>
  );
};
export default Join;
