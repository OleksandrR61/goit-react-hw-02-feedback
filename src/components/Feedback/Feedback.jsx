import { Component } from "react";

import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    GRADES = ["good", "neutral", "bad"];

    handleLeaveFeedback = (event) => {
        this.setState((prevState) => ({
            [event.target.name]: prevState[event.target.name] + 1,
        }));
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((prev, current) => prev + current, 0);
    }

    countPositiveFeedbackPercentage = () => {
        return `${this.countTotalFeedback() && Math.round(100*this.state.good/this.countTotalFeedback())}%`;
    }

    render() {
        return (
            <>
                <h1>Feedback Count</h1>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.GRADES}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    <Statistics
                        option={this.state}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </>
        );
    }
}