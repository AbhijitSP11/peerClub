import React from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";
const WhyUs = () => {
  return (
    <div className={styles.container}>
      <Fade left>
        <div className={styles.left}>
          <h4>Why Peer Batches ?</h4>
          <p>
            We know that we are not the only firm in the market, so what does
            make us any different?
          </p>
          <br />
          <p>
            Feel free to connect with our experienced mentors and teachers
            anytime. Student groups’ getting educated together also inculcates a
            sense of competition, motivation, and teamwork in them. Find all
            kinds of batches and study material on our website with 20+ topics
            covered and set as per the student’s convenience. Join us now!
          </p>
        </div>
      </Fade>
      <Fade right>
        <div className={styles.right}>
          {/* <img alt="canada gateway" src="./static/WhyUs.png" /> */}
          <div className={styles.parent}>
            <div className={styles.text__card}>
              <h4 style={{ fontSize: "1.5rem" }}>Foster peer learning</h4>
              <div style={{ marginTop: "1rem" }}>
                Learn from like minded peers to <br /> make the learning process
                more fun and easy.
              </div>
            </div>
            <div className={styles.text__card_right}>
              <h4 style={{ fontSize: "1.5rem" }}>Live Doubt Sessions</h4>
              <div style={{ marginTop: "1rem" }}>
                Got doubts? No worries! Get help from learned mentors who not
                only clear your doubts but also track your performance.
              </div>
            </div>{" "}
            <div className={styles.text__card_2}>
              <h4 style={{ fontSize: "1.5rem" }}>Develop skills</h4>
              <div style={{ marginTop: "1rem" }}>
                Upskill yourself for the future and to broaden your horizons.
              </div>
            </div>{" "}
            <div className={styles.text__card_3}>
              <h4 style={{ fontSize: "1.5rem" }}>Build Confidence</h4>
              <div style={{ marginTop: "1rem" }}>
                Learn practical skills and networking to boost your confidence.
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WhyUs;
