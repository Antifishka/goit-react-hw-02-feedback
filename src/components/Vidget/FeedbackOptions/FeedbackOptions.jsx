import React from "react";
import PropTypes from 'prop-types';
import { OptionsBtn, OptionsList } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <OptionsList>
        <li>
            <OptionsBtn
                type="button"
                name={options[0]}
                onClick={onLeaveFeedback}>Good
            </OptionsBtn>
            
        </li>
        <li>
            <OptionsBtn
                type="button"
                name={options[1]}
                onClick={onLeaveFeedback}>Neutral
            </OptionsBtn>
        </li>
        <li>
            <OptionsBtn
                type="button"
                name={options[2]}
                onClick={onLeaveFeedback}>Bad
            </OptionsBtn>
        </li>
    </OptionsList>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}