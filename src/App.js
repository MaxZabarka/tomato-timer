import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Timer from "./components/Timer/Timer";
import SwitchHeader from "./components/SwitchHeader/SwitchHeader";
import StartStopButton from "./components/StartStopButton/StartStopButton";
import classes from "./App.module.scss";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Slider from "./components/Slider/Slider";

class App extends Component {
	timerRef = React.createRef();
	switchRef = React.createRef();
	switchHeader = React.createRef();

	state = {
		times: {
			pomo: 25 * 60,
			long: 15 * 60,
			short: 5 * 60,
		},
		longBreakInterval: 4,
		pomosUntilLongBreak: 4,
		percentage: 0,
	};
	updateTimer = (type) => {
		this.switchHeader.current.setState({ active: type });
		this.timerRef.current.stopTimer();
		this.timerRef.current.setTimeLeft(this.state.times[type]);
	};
	timerFinished = () => {
		switch (this.switchHeader.current.state.active) {
			case "pomo":
				this.setState((prevState) => {
					if (prevState.pomosUntilLongBreak - 1 <= 0) {
						this.updateTimer("long");
					} else {
						this.updateTimer("short");
					}
					return {
						pomosUntilLongBreak: prevState.pomosUntilLongBreak - 1,
					};
				});
				break;
			case "short":
				this.updateTimer("pomo");
				break;
			case "long":
				this.setState({
					pomosUntilLongBreak: this.state.longBreakInterval,
				});
				this.updateTimer("pomo");
				break;
			default:
				break;
		}
	};
	updatePercentageHandler = (timeRemaining) => {
		const percentage =
			100 -
			(timeRemaining /
				this.state.times[this.switchHeader.current.state.active]) *
				100;
		this.setState({ percentage });
	};
	sliderOnChangeHandler = (value,type) => {
		let newTimes = {...this.state.times}
		newTimes[type] = value
		this.setState({times:newTimes})
		if (!this.timerRef.current.running()) {
			this.timerRef.current.setTimeLeft(newTimes[type])
		}

	};
	render() {
		return (
			<React.Fragment>
				<Layout>
					<ProgressBar percent={this.state.percentage} />
					<div className={classes["main-wrapper"]}>
						<SwitchHeader
							ref={this.switchHeader}
							changed={this.updateTimer}
						/>
						<Timer
							stop={() =>
								this.switchRef.current.setState({
									started: false,
								})
							}
							ref={this.timerRef}
							timeUp={this.timerFinished}
							onUpdate={this.updatePercentageHandler}
						/>
						<StartStopButton
							stop={() => this.timerRef.current.stopTimer()}
							start={() => this.timerRef.current.startTimer()}
							ref={this.switchRef}
						/>
						<p className={classes["pomos-remaining"]}>
							Pomodoros until long break:{" "}
							{this.state.pomosUntilLongBreak}
						</p>
					</div>
					<div className={classes["sliders-wrapper"]}>
						<div className={classes["sliders"]}>
							<Slider
								type="pomo"
								label="Work Duration"
								default={this.state.times.pomo}
								max={50 * 60}
								changedCallback={this.sliderOnChangeHandler}
							/>
							<Slider
								type="short"
								label="Short Break"
								default={this.state.times.short}
								max={50 * 60}
								changedCallback={this.sliderOnChangeHandler}
							/>
							<Slider
								type="long"
								label="Long Break"
								default={this.state.times.long}
								max={50 * 60}
								changedCallback={this.sliderOnChangeHandler}
							/>
						</div>
					</div>
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
