import React from "react";
import Input from "../../../ui/input";
import Fade from "react-reveal/Fade";

import styles from "./styles.module.scss";

const ConnectWithUs = ({ showHeading = true }) => {
  return (
    <div className={styles.container}>
      {showHeading && (
        <div>
          <h1>Connect with us</h1>
        </div>
      )}
      <form action="">
        <Input
          label={"Your Name"}
          type={"text"}
          placeholder={"Enter your name here ..."}
          onChange={null}
        />
        <Input
          label={"Your Contact"}
          type={"phone"}
          placeholder={"Enter your name here ..."}
          onChange={null}
        />

        <Input
          label={"Your Email"}
          type={"email"}
          placeholder={"Enter your name here ..."}
          onChange={null}
        />
        <span>
          <input type="checkbox" id="news" />
          <label htmlFor="news">Get in touch with us on Email</label>
        </span>

        <button type="submit">Click to connect</button>
      </form>
    </div>
  );
};

export default ConnectWithUs;
