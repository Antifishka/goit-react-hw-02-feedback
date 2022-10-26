import React from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Value } from "./Value/Value";
import { BoxVidget } from "./Vidget.slyled";

class Vidget extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    }

    static propTypes = {
        //
    }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    }

    handlerGoodFeedback = () => {
        console.log('Клик Good')
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    handlerNeutralFeedback = () => {
        console.log('Клик Neutral') 
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    handlerBadFeedback = () => {
        console.log('Клик Bad') 
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        const positiveFeedbackPercentage = (this.state.good*100) / (this.state.good + this.state.neutral + this.state.bad);
        return Math.round(positiveFeedbackPercentage);
    }

    render() {
        return (
            <BoxVidget>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        onGoodFeedback={this.handlerGoodFeedback}
                        onNeutralFeedback={this.handlerNeutralFeedback}
                        onBadFeedback={this.handlerBadFeedback}
                    />
                </Section>    

                <Section title="Statistics">
                    <Value
                    valueGood={this.state.good}
                    valueNeutral={this.state.neutral}
                    valueBad={this.state.bad}
                    valueTotal={this.countTotalFeedback()}
                    valuePositive={this.countPositiveFeedbackPercentage()}
                />
                </Section>
            </BoxVidget>
        );
    }
}

export default Vidget;
