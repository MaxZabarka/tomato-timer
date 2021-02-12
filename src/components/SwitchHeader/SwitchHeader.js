import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import classes from "./SwitchHeader.module.css";

class SwitchHeader extends Component {
	state = {
		active: "pomo",
	};
	setActive(type) {
		this.setState({ active: type });
		this.props.changed(type);
	}
	render() {
		return (
			<div className={classes.SwitchHeader}>
				<Button
					className={classes.SwitchButton}
					variant={
						this.state.active === "pomo"
							? "primary"
							: "outline-primary"
					}
					onClick={() => this.setActive("pomo")}
				>
					Pomodoro
				</Button>
				<Button
					className={classes.SwitchButton}
					variant={
						this.state.active === "short"
							? "primary"
							: "outline-primary"
					}
					onClick={() => this.setActive("short")}
				>
					Short Break
				</Button>
				<Button
					className={classes.SwitchButton}
					variant={
						this.state.active === "long"
							? "primary"
							: "outline-primary"
					}
					onClick={() => this.setActive("long")}
				>
					Long Break
				</Button>
			</div>
		);
	}
}

export default SwitchHeader;
