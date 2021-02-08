import {ADD_TEST, REMOVE_TEST} from "./types";

export const addTest = () => {
    return {
        type: ADD_TEST
    }
}

export const removeTest = () => {
    return {
        type: REMOVE_TEST
    }
}
