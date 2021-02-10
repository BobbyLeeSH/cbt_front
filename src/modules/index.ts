import {combineReducers} from 'redux';
import auth, {authSaga} from './auth';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    auth,
});

export function* rootSaga() {
    yield all(
        [
            authSaga(),
        ]
    )
}

export type RootReducerType = ReturnType<typeof rootReducer>; // (1)

export default rootReducer;