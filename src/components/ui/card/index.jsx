import React from "react";
import styles from "./styles.module.scss";
import { MdWorkOutline } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

const Card = ({ title, excerpt, description,icon, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${id}`);
  };
  return (
    <Fade bottom>
      <div className={styles.container}>
        <img src={icon} />
        <h4>{title}</h4>
        <p>{description}</p>
        <p style={{ backgroundColor: "#01C767", color: "white" }}>{excerpt}</p> 
        <div onClick={handleClick}>Enroll now</div>
      </div>
    </Fade>
  );
};

export default Card;
