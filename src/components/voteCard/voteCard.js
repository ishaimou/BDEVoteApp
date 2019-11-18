import React from "react";
import classes from "./voteCard.module.css";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
const VoteCard = props => {
  return (
    <div className={classes.containerDiv}>
      <div className={classes.cardDiv}>
        <div className={classes.logoDiv}>
          <img
            src={props.item ? props.item.logo : ""}
            style={{ width: "100%", borderRadius: "5px" }}
            alt="Group Logo"
          />
        </div>
        <h1 className={classes.groupName}>
          {props.item ? props.item.name : ""}
        </h1>
        <div className={classes.divider} />
        <p className={classes.description}>
          {props.item ? props.item.description.substring(0, 200) : ""}
          {props.item && props.item.description.length > 200 ? "..." : ""}
        </p>
        <div className={classes.buttonsContainer}>
          <Button className={classes.voteButton} disabled={!props.canVote}>
            <b>Vote</b>
          </Button>
          <Button
            onClick={() => {
              props.history.push(`/${props.item.id}`);
            }}
            className={classes.moreButton}
          >
            <b>More</b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VoteCard);
