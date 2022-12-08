import React from "react";
import styles from "./styles.module.scss";

const MemberCard = ({ image, name, role }) => {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
