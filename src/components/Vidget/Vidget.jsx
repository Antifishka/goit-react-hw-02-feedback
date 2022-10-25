import React from "react";
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

                <ul>
                    <li><button type="button"
                        onClick={this.handlerGoodFeedback}
                    >Good</button>
                    </li>
                    <li><button type="button"
                    onClick={this.handlerNeutralFeedback}
                    >Neutral</button>
                    </li>
                    <li><button type="button"
                    onClick={this.handlerBadFeedback}
                    >Bad</button>
                    </li>
                </ul>

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
