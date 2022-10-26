import React from "react";

export const Controls = ({onGoodFeedback, onNeutralFeedback, onBadFeedback}) => (
    <ul>
        <li><button type="button"
            onClick={this.onGoodFeedback}
        >Good</button>
        </li>
        <li><button type="button"
            onClick={this.onNeutralFeedback}
        >Neutral</button>
        </li>
        <li><button type="button"
            onClick={this.onBadFeedback}
        >Bad</button>
        </li>
    </ul>
);