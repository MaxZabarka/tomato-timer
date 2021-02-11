import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class StartStopButton extends Component {
    state = {started:false}
    clickHandler = () => {
        this.setState(prevState => {
            if (prevState.started) {
                this.props.stop()
            } else {
                this.props.start()
            }
            return {started:!prevState.started}
        })
    }
    render() {
        return (
            <Button onClick={this.clickHandler}>{this.state.started ? "Stop": "Start"}</Button>
        );
    }
}

export default StartStopButton;