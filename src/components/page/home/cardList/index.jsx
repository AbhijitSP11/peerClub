import React from "react";
import Card from "../../../ui/card";
import styles from "./styles.module.scss";
import { MdWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Card
          title={"Python"}
          excerpt={
            "For the tech enthusiast in you, learn python a general purpose programming language used for web development and AI."
          }
          icon={"../../../../../dist/assets/static/python.jpeg"}
          id={1}
        />
        <Card
          title={"Digital Marketing"}
          excerpt={
            "If you have are persuasive and have a creative side then this course is for you. Learn the ABC’s of digital marketing and become the best in the game. "
          }
          icon={"../../../../../dist/assets/static/dm.jpg"}
          id={2}
        />
        <Card
          title={"Public Speaking"}
          excerpt={
            " For the leader in you, learn how to communicate in a formal setting and enhance your public speaking skills with the help of this course."
          }
          icon={"../../../../../dist/assets/static/public.jpg"}
          id={3}
        />
      </div>
    </div>
  );
};

export default CardList;
