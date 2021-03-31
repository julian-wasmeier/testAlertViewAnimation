import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";
import Question from "./question";
import styles from "./questionStack.module.css";

const QuestionStack = () => {
  const items = [
    "Magst du Fifa?",
    "Studierst du?",
    "Magst du Hitler?",
    "Nimmst du harte Drogen?",
    "Hast du Syphilis?",
    "Hast du Spaß?",
  ];
  const [next, set] = useState(false);
  const [feedback, setFeedback] = useState(undefined);
  const [randomItem, setRandomItem] = useState();

  useEffect(() => {
    setRandomItem((prev) => {
      return items[Math.floor(Math.random() * items.length)];
    });
    setFeedback(undefined);
  }, [next]);

  return (
    <div className={styles.container}>
      <Question randomItem={randomItem}></Question>
      <Feedback show={feedback !== undefined} type={feedback}></Feedback>
      <div className={styles.buttonContainer}>
        <button className={styles.yes} onClick={() => setFeedback(true)}>
          Ja
        </button>
        <button className={styles.no} onClick={() => setFeedback(false)}>
          Nein
        </button>
        <button className={styles.next} onClick={() => set(!next)}>
          Nächste Frage
        </button>
      </div>
    </div>
  );
};

export default QuestionStack;
