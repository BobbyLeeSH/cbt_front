import {
    GET_USER_INFO,
    getUserInfoError, getUserInfoSuccess
} from './actions';
import * as UserInfoApi from "../../api/UserInfoApi"
import {AxiosResponse} from "axios";
import {call, put, takeEvery} from 'redux-saga/effects';


function* getUserInfoSaga() {
    try {
        const res: AxiosResponse = yield call(() => UserInfoApi.getUserInfo());
        yield put(getUserInfoSuccess(res.data)); // 성공 액션 디스패치
    } catch (e) {
        yield put(getUserInfoError(e));// 실패 액션 디스패치
    }
}

export function* userInfoSaga() {
    yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}
