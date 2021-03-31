import React from "react";
import happy from "../img/happy.jfif";
import side from "../img/emojiside.png";
import styles from "./feedback.module.css";
import { useTransition, useSpring, animated } from "react-spring";

const Feedback = ({ show, type }) => {
  return (
    <div className={styles.feedbackContainer}>
      {show && (
        <animated.div className={styles.feedback}>
          <p>{type ? "Nice, ich auch!" : "Ich auch nicht."}</p>
          <img className={styles.happy} src={type ? happy : side}></img>
        </animated.div>
      )}
    </div>
  );
};

export default Feedback;
