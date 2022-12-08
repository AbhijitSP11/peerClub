import React, { useContext } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

import Card from "../../../ui/card";
import styles from "./styles.module.scss";
import { ServiceContext } from "../../../../Services";

const CardList = ({ searchItem }) => {
  const context = useContext(ServiceContext);
  const data = context.services;
  let filteredData = data;

  if (searchItem.trim() !== "") {
    filteredData = data.filter((item) =>
      item.attributes.title
        .toLowerCase()
        .includes(searchItem.toLowerCase().trim())
    );
  }

  return (
    <div className={styles.container}>
      {filteredData.length > 0 ? (
        <div className={styles.listContainer}>
          {filteredData.map((card, i) => (
            <Card
              key={i}
              title={card.attributes.title}
              excerpt="Price - 200/-"
              description={card.attributes.description}
              icon={`${card.attributes.image?.data.attributes.url}`}
              id={card.id}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <h2>Sorry, there's no match for "{searchItem}"</h2>
          <HiOutlineEmojiSad />
        </div>
      )}
    </div>
  );
};

export default CardList;
