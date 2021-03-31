import { render } from "react-dom";
import React, { useState } from "react";
import { useTransition, animated as a } from "react-spring";
import "./Card.css";
function Card({ show }) {
  const transition = useTransition(show, null, {
    from: { transform: "scale(0.2)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0.2)" },
  });

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <a.div className={"card"} style={props}>
          CardContent
        </a.div>
      )
  );
}

export default Card;
