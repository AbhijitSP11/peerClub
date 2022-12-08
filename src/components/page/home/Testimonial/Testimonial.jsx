import React from "react";
import TestimonialCard from "./TestimonialCard";
import courseImg1 from "../../../../../public/static/testimon.jpg";
import styles from "./Testimonial.module.css";

const coursesData = [
  {
    id: "01",
    title: "Shubhangi Taneja",
    imgUrl:
      "https://peerpower.club/wp-content/uploads/2021/06/circle-cropped-4-1.png",
    description:
      "My experience with peerpowerclub was very good and I learn lot of technical stuff from my instructor.",
  },

  {
    id: "02",
    title: "Kanika Khosla",
    imgUrl:
      "https://peerpower.club/wp-content/uploads/2021/06/circle-cropped-7-150x150.png",
    description:
      "I am very overwhelmed by the skill imparted by the team. Thanks to the dedication of peer Power Club for going an extra mile.",
  },

  {
    id: "03",
    title: "Aditya Raut",
    imgUrl:
      "https://peerpower.club/wp-content/uploads/2021/06/circle-cropped-1-3-150x150.png",
    description:
      "My experience with peerpowerclub was very good and I learn lot of   technical stuff from my instructor.",
  },
];

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header__top}>
        <h1>Testimonial</h1>
      </div>
      <div className={styles.testimonialContainer}>
        {coursesData.map((item) => (
          <div>
            <TestimonialCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
