import { combineReducers } from "redux";
import actionTypes from './counter-types';

const counterValueReducer = (state = 10, { type, payload }) => {
    switch (type) {
        case actionTypes.INCREMENT:
            return state + payload;
        case actionTypes.DECREMENT:
            return state - payload;
        default:
            return state;
    }
}

const counterStepReducer = (state = 10, action) => state;

export const counterReducer = combineReducers({
    value: counterValueReducer,
    step: counterStepReducer,
})