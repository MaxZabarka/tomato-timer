import React from "react";
import classes from "./ProgressBar.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
const TimerBar = (props) => {
	return <ProgressBar className={classes.ProgressBar} now={props.percent} />;
};

export default TimerBar;
