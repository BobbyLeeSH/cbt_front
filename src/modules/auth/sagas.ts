import {
    login,
    LOGIN,
    loginError,
    loginSuccess, LOGOUT, logoutSuccess,
    VALIDATE_TOKEN,
    validateTokenError,
    validateTokenSuccess
} from './actions';
import * as LoginApi from "../../api/LoginApi"
import {AxiosResponse} from "axios";
import {call, put, takeLatest} from 'redux-saga/effects';


function* loginSaga(action: ReturnType<typeof login>) {
    const loginRequest = action.payload;
    try {
        const res: AxiosResponse = yield call(() => LoginApi.login(loginRequest));
        localStorage.setItem("ACCESS_TOKEN", res.headers.authorization)
        yield put(loginSuccess()); // 성공 액션 디스패치
    } catch (e) {
        yield put(loginError(e));// 실패 액션 디스패치
    }
}

function* logoutSaga() {
    try {
        yield call(()=> localStorage.removeItem("ACCESS_TOKEN"))
        yield put(logoutSuccess()); // 성공 액션 디스패치
    } catch (e) {

    }
}

function* validateTokenSaga() {
    try {
        yield call(() => LoginApi.auth());
        yield put(validateTokenSuccess()); // 성공 액션 디스패치
    } catch (e) {
        localStorage.removeItem("ACCESS_TOKEN")
        yield put(validateTokenError());// 실패 액션 디스패치
    }
}

export function* authSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(VALIDATE_TOKEN, validateTokenSaga);
    yield takeLatest(LOGIN, loginSaga);
}
