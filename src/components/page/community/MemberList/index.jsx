import React from "react";
import MemberCard from "../MemberCard";
import styles from "./styles.module.scss";

const data = [
  {
    name: "Pratham Seth",
    image: "https://peerpower.club/wp-content/uploads/2021/09/officialdp.jpg",
    role: "CEO",
  },
  {
    name: "Pavni Goyal",
    image:
      "https://peerpower.club/wp-content/uploads/2021/09/mee-768x1024.jpeg",
    role: "Content Writing",
  },
  {
    name: "Aparajita",
    image: "https://peerpower.club/wp-content/uploads/2021/09/Aparajita.png",
    role: "Sales",
  },
  {
    name: "Mahi Dheri",
    image: "https://peerpower.club/wp-content/uploads/2021/09/4-655x1024.jpeg",
    role: "Community",
  },
  {
    name: "Ajay Nair",
    image: "https://peerpower.club/wp-content/uploads/2021/07/Ajay-nair.png",
    role: "Design",
  },
  {
    name: "Jahanvi Sharma",
    image: "https://peerpower.club/wp-content/uploads/2021/09/3-766x1024.jpeg",
    role: "Recruitment",
  },
  {
    name: "Ritika Raghuwanshi",
    image: "https://peerpower.club/wp-content/uploads/2021/09/1.jpeg",
    role: "Social Media",
  },
  {
    name: "Stuti Lavania",
    image: "https://peerpower.club/wp-content/uploads/2021/09/9-768x1024.jpeg",
    role: "Design",
  },
];

const MemberList = () => {
  return (
    <>
      <center>
        <h1>Our Team Members</h1>
      </center>
      <div className={styles.container}>
        {data.map((item, i) => (
          <MemberCard
            key={i}
            name={item.name}
            image={item.image}
            role={item.role}
          />
        ))}
      </div>
    </>
  );
};

export default MemberList;
