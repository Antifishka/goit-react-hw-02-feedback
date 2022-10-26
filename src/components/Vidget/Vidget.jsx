import React from "react";
import { Controls } from "./Controls/Controls";
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

    render() {
        return (
            <BoxVidget>
                <h2>Please leave feedback</h2>

                <Controls
                    onGoodFeedback={this.handlerGoodFeedback}
                    onNeutralFeedback={this.handlerNeutralFeedback}
                    onBadFeedback={this.handlerBadFeedback}
                />

                <h3>Statistics</h3>

                <ul>
                    <li>
                        <p>Good: {this.state.good}</p>
                    </li>
                    <li>
                        <p>Neutral: {this.state.neutral}</p>
                    </li>
                    <li>
                        <p>Bad: {this.state.bad}</p>
                    </li>
                </ul>
            </BoxVidget>
        );
    }
}

export default Vidget;
