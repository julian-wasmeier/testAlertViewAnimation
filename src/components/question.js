import React from "react";
import styles from "./question.module.css";

const Question = ({ randomItem }) => {
  return (
    <div>
      <p className={styles.question}>{randomItem}</p>
    </div>
  );
};

export default Question;
