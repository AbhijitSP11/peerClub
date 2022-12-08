import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <img
          src="../../../../public/static/ppc.png"
          alt="Peer Power Club"
          height={50}
        />
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/terms-and-conditions"}>Terms and conditions</Link>
          </li>
          <li>
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>Copyright © 2022</div>
    </>
  );
};

export default Footer;
