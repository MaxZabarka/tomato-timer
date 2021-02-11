import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Timer from "./components/Timer/Timer";
import SwitchHeader from "./components/SwitchHeader/SwitchHeader";
import StartStopButton from "./components/StartStopButton/StartStopButton";
class App extends Component {
  timerRef = React.createRef();
  switchRef = React.createRef()
	state = {
		times: {
			pomo: 15,
			long: 10,
			short: 5,
    },
	};
	updateTimer = (type) => {
    this.timerRef.current.stopTimer();
		this.timerRef.current.setTimeLeft(this.state.times[type]);
	};

	render() {
		return (
			<React.Fragment>
				<Layout>
					<SwitchHeader changed={this.updateTimer} />
					<Timer stop={() => this.switchRef.current.setState({started:false})} ref={this.timerRef} />
					<StartStopButton
						stop={() => this.timerRef.current.stopTimer()}
            start={() => this.timerRef.current.startTimer()}
            ref={this.switchRef}
					/>
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
