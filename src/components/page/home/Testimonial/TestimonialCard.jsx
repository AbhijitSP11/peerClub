import React from "react";
import styles from "./Testimonial.module.scss";

const TestimonialCard = (props) => {
  const { title, description, imgUrl } = props.item;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={imgUrl}
          alt=""
          height={120}
          width={120}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={styles.name}>
        <h4 style={{ fontSize: "1.2em" }}>{title}</h4>
      </div>
      <div className={styles.description}>
        <span style={{ marginLeft: "-24rem", fontSize: "2em" }}>"</span>
        <p>{description}</p>
        <span style={{ marginLeft: "24rem", fontSize: "2em" }}>"</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
