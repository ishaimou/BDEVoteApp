import React from "react";
import classes from "./countBox.module.css";

const CountBox = props => {
  return (
    <div className={classes.main}>
      <span className={classes.counterSoan}>{props.number}</span>
      <span className={classes.counterSoan}>{props.text}</span>
    </div>
  );
};

export default CountBox;
