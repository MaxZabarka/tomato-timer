import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class SwitchHeader extends Component {
    state = {
        active:"pomo"
    }
    setActive(type) {
        this.setState({active:type})
        this.props.changed(type)
    }
    render() {
        return (
            <div>
                <Button variant={this.state.active === "pomo" ? "primary" : "outline-primary"} onClick={() => this.setActive("pomo")} className="mr-2">Pomodoro</Button>
                <Button variant={this.state.active === "short" ? "primary" : "outline-primary"} onClick={() => this.setActive("short")} className="mr-2">Short Break</Button>
                <Button variant={this.state.active === "long" ? "primary" : "outline-primary"} onClick={() => this.setActive("long")} className="mr-2">Long Break</Button>
            </div>
        );
    }
}

export default SwitchHeader;