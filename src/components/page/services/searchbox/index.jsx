/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Input from "../../../ui/input";
import styles from "./styles.module.scss";

const SearchBox = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <h3>Search for courses</h3>
        <Input
          type={"text"}
          placeholder={"Search here ..."}
          label={""}
          onChange={onChange}
        />

        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default SearchBox;
