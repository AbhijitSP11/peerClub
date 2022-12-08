import React from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

const WhatYouCan = ({ benefits, imageTwo }) => {
  return (
    <div className={styles.container}>
      <Fade left>
        <div className={styles.left}>
          <img alt="canada gateway" src={imageTwo} height={600} width={220} />
        </div>
      </Fade>
      <Fade right>
        <div className={styles.right}>
          <h4>What you'll learn</h4>
          <div className={styles.learnings}>
            <p dangerouslySetInnerHTML={{ __html: benefits }}></p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WhatYouCan;
