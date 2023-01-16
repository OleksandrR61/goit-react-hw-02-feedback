import { Component } from "react";

import { Rate } from "../Rate/Rate";
import { Statistics } from "../Statistics/Statistics";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    GRADES = ["good", "neutral", "bad"];

    handleCounter = (event) => {
        this.setState((prevState) => ({
            [event.target.name]: prevState[event.target.name] + 1,
        }));
    };

    render() {
        return (
            <>
                <h1>Feedback Count</h1>
                <Rate grades={this.GRADES} onHandleCounter={this.handleCounter}></Rate>

                BAD: {this.state.bad}, GOOD: {this.state.good}, NEUTRAL: {this.state.neutral}
                <Statistics grades={this.state} />
            </>
        );
    }
}