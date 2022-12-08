import React from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";
const ConsultantInfo = ({
  consultantName,
  consultantDetails,
  consultantImage,
}) => {
  return (
    <div className={styles.container}>
      <Fade left>
        <div className={styles.left}>
          <h2>Meet the Instructor</h2>

          <h3>{consultantName}</h3>
          <p dangerouslySetInnerHTML={{ __html: consultantDetails }}></p>
        </div>
      </Fade>
      <Fade right>
        <div className={styles.right}>
          <img alt="canada gateway" src={consultantImage} />
        </div>
      </Fade>
    </div>
  );
};

export default ConsultantInfo;
