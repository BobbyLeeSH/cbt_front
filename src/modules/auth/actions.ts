import {AxiosError} from "axios";
import {LoginRequest} from "../../api/LoginApi";

export const LOGIN = 'LOGIN' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'LOGIN_ERROR' as const;

export const LOGOUT = 'LOGOUT' as const;

// 액션 생성함수
export const login = (loginRequest: LoginRequest) => ({type: LOGIN, payload: loginRequest});
export const loginSuccess = (token: String) => ({type: LOGIN_SUCCESS, payload: token});
export const loginError = (error: AxiosError) => ({type: LOGIN_ERROR, payload: error});

export const logout = () => ({type: LOGOUT});

// 액션객체 타입
export type AuthType =
    | ReturnType<typeof login>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginError>
    | ReturnType<typeof logout>;