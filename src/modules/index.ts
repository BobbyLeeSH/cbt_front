import {combineReducers} from "@reduxjs/toolkit";
import auth, {authSaga} from './auth';
import {all} from 'redux-saga/effects';
import userInfo, {userInfoSaga} from "./user";

const rootReducer = combineReducers({
    auth, userInfo
});

export function* rootSaga() {
    yield all(
        [
            authSaga(),
            userInfoSaga(),
        ]
    )
}

export type RootReducerType = ReturnType<typeof rootReducer>; // (1)

export default rootReducer;