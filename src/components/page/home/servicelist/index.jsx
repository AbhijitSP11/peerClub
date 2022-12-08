import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

const services = [
  {
    id: 1,
    name: "Work in Enjoyable Environment",
    content:
      "Work in an environment where students are eager to learn and teach. Be a part of their peer group! ",
    image: "./static/study.png",
  },
  {
    id: 2,
    name: "Passive Income",
    content: `Earn a little extra income by mentoring!`,
    image: "./static/work.png",
  },
  {
    id: 3,
    name: "Become a part of Community",
    content: `Make an impact on the world by teaching students real life skills, after all students are our countries future.`,
    image: "./static/immigrate.png",
  },
];

const ServiceList = () => {
  const [item, setItem] = useState(0);
  return (
    <div className={styles.container}>
      <Fade left>
        <div className={styles.left}>
          <img
            src={services[item].image}
            alt="study in canada with canada gateway"
          />
        </div>
      </Fade>
      <Fade right>
        <div className={styles.right}>
          <ul>
            {services.map((service, i) => (
              <li
                key={i}
                className={i === item ? styles.active : ""}
                onClick={() => setItem(i)}
              >
                <h4>{service.name}</h4>
                <p>{service.content}</p>
                <span
                  style={{
                    borderColor: i === item ? "white" : "black",
                  }}
                ></span>
              </li>
            ))}
          </ul>
          <div>
            <Link to={`/services`}>and much more.</Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceList;
