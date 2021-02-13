import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class StartStopButton extends Component {
	state = { started: false };
	clickHandler = () => {
		this.props.playClick()
		this.setState((prevState) => {
			if (prevState.started) {
				this.props.stop();
			} else {
				this.props.start();
			}
			return { started: !prevState.started };
		});
	};
	render() {
		return (
			<Button
				size="lg"
				variant={this.state.started ? "primary" : "outline-primary"}
				onClick={this.clickHandler}
			>
				{this.state.started ? "Pause" : "Start"}
			</Button>
		);
	}
}

export default StartStopButton;
