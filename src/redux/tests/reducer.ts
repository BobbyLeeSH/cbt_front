import {ADD_TEST, REMOVE_TEST, TestActionTypes} from "./types";

const initialState = {
    count: 123
}

const testReducer = (state = initialState, action: TestActionTypes) => {
    switch (action.type) {
        case ADD_TEST:
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE_TEST:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default testReducer;