import React from "react";
import styles from "./company-section.module.css";
import { BsWhatsapp, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Company = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companies}>
        <div>
          <h2 style={{ color: "" }}>
            <BsInstagram /> Instragram
          </h2>
        </div>
        <div>
          <h2 style={{ color: "#00a8e8" }}>
            <BsLinkedin /> LinkedIn
          </h2>
        </div>
        <div>
          <h2 style={{ color: "" }}>
            <AiOutlineMail /> Email
          </h2>
        </div>
        <div>
          <h2 style={{ color: "#01c767" }}>
            <BsWhatsapp /> Whatsapp
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Company;
