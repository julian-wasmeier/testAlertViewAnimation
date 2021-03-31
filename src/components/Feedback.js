import React from "react";
import happy from "../img/happy.jfif";
import side from "../img/emojiside.png";
import styles from "./feedback.module.css";
import { useTransition, useSpring, animated } from "react-spring";

const Feedback = ({ show, type }) => {
  const transition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    initial: null,
  });

  return (
    <div className={styles.feedbackContainer}>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} className={styles.feedback}>
              <p>{type ? "Nice, ich auch!" : "Ich auch nicht."}</p>
              <img className={styles.happy} src={type ? happy : side}></img>
            </animated.div>
          )
      )}
    </div>
  );
};

export default Feedback;
