import React from "react";
import PropTypes from 'prop-types';
import { OptionsBtn, OptionsList } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onGoodFeedback, onNeutralFeedback, onBadFeedback}) => (
    <OptionsList>
        <li>
            <OptionsBtn
                type="button"
                onClick={onGoodFeedback}>Good
            </OptionsBtn>
            
        </li>
        <li>
            <OptionsBtn
                type="button"
                onClick={onNeutralFeedback}>Neutral
            </OptionsBtn>
        </li>
        <li>
            <OptionsBtn
                type="button"
                onClick={onBadFeedback}>Bad
            </OptionsBtn>
        </li>
    </OptionsList>
);

FeedbackOptions.propTypes = {
    onGoodFeedback: PropTypes.func.isRequired,
    onNeutralFeedback: PropTypes.func.isRequired,
    onBadFeedback: PropTypes.func.isRequired,
}