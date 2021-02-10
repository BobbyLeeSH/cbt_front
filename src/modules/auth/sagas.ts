import {login, LOGIN, loginError, loginSuccess} from './actions';
import * as LoginApi from "../../api/LoginApi"
import {AxiosResponse} from "axios";
import {call, put, takeLatest} from 'redux-saga/effects';


function* loginSaga(action: ReturnType<typeof login>) {
    const loginRequest = action.payload;
    try {
        const res: AxiosResponse = yield call(() => LoginApi.login(loginRequest));
        let token = res.headers.authorization
        console.log(token)
        yield put(loginSuccess(token)); // 성공 액션 디스패치
    } catch (e) {
        yield put(loginError(e));// 실패 액션 디스패치
    }
}

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
}
