import React, { Component } from "react";
import { secondsToString } from "../../helpers";
import classes from "./Timer.module.scss";

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { timeRemaining: 25 * 60 };
	}

	startTimer() {
		console.log("created");
		this.intervalObject = setInterval(() => {
			this.setState((prevState) => {
				if (prevState.timeRemaining <= 0) {
					this.props.timeUp();
					this.stopTimer();
				}
				this.props.onUpdate(prevState.timeRemaining - 1);
				return { timeRemaining: prevState.timeRemaining - 1 };
			});
		}, 1000);
	}
	running = () => {
		console.log(this.intervalObject);
		return this.intervalObject;
	};
	stopTimer() {
		clearInterval(this.intervalObject);
		console.log("cleared");
		this.props.stop();
	}
	setTimeLeft(timeLeft) {
		this.setState(() => {
			this.props.onUpdate(timeLeft);
			return { timeRemaining: timeLeft };
		});
	}

	render() {
		return (
			<h1 className={classes.Timer}>
				{secondsToString(this.state.timeRemaining)}
			</h1>
		);
	}
}

export default Timer;
