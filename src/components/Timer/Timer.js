import React, { Component } from "react";

class Timer extends Component {
	constructor(props) {
		super(props);
        this.state = { timeRemaining: 10 };
	}
    
	startTimer() {
		this.intervalObject = setInterval(() => {
			this.setState((prevState) => {
				return { timeRemaining: prevState.timeRemaining - 1 };
			});
		},1000);
	};

	stopTimer ()  {
        this.props.stop()
		clearInterval(this.intervalObject);
    };
    setTimeLeft(timeLeft) {
        this.setState({timeRemaining:timeLeft})
    }
    secondsToString(seconds) {
        const displaySeconds = seconds % 60
        const displayMinutes = (seconds-displaySeconds)/60
        return `${displayMinutes}:${displaySeconds}`
    }
	render() {
		return <h1>{this.secondsToString(this.state.timeRemaining)}</h1>;
	}
}

export default Timer;
