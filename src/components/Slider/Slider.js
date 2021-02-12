import React, { Component } from "react";
import { secondsToString } from "../../helpers";
import classes from "./Slider.module.scss"
class Slider extends Component {
	sliderRef = React.createRef();
	inputRef = React.createRef();
	state = {
		value: this.props.default,
	};
	onSliderChange() {
        const value = this.sliderRef.current.value;
        this.setState({ value: value });
		this.props.changedCallback(value,this.props.type);
    }

	render() {
		return (
			<React.Fragment>
				<div className={classes["slider-label"]}>
                    <h3>{this.props.label}</h3>
					<h3>{secondsToString(this.state.value)}</ h3 >
				</div>
				<input
				disabled={this.props.disabled}
				className={classes.slider}
				step={30}
				min={30}
                max={this.props.max}
					ref={this.sliderRef}
					onChange={this.onSliderChange.bind(this)}
					type="range"
				/>
			</React.Fragment>   
		);
	}
	componentDidMount() {
		this.sliderRef.current.value = this.state.value;
	}
}

export default Slider;
