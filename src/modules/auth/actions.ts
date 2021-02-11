import {AxiosError} from "axios";
import {LoginRequest} from "../../api/LoginApi";

export const LOGIN = 'LOGIN' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'LOGIN_ERROR' as const;

export const VALIDATE_TOKEN = 'VALIDATE_TOKEN' as const;
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS' as const;
export const VALIDATE_TOKEN_ERROR = 'VALIDATE_TOKEN_ERROR' as const;

export const LOGOUT = 'LOGOUT' as const;
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;

// 액션 생성함수
export const login = (loginRequest: LoginRequest) => ({type: LOGIN, payload: loginRequest});
export const loginSuccess = () => ({type: LOGIN_SUCCESS});
export const loginError = (error: AxiosError) => ({type: LOGIN_ERROR, payload: error});

export const validateToken = () => ({type: VALIDATE_TOKEN});
export const validateTokenSuccess = () => ({type: VALIDATE_TOKEN_SUCCESS});
export const validateTokenError = () => ({type: VALIDATE_TOKEN_ERROR});

export const logout = () => ({type: LOGOUT});
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS});

// 액션객체 타입
export type AuthType =
    | ReturnType<typeof login>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginError>
    | ReturnType<typeof validateToken>
    | ReturnType<typeof validateTokenSuccess>
    | ReturnType<typeof validateTokenError>
    | ReturnType<typeof logout>
    | ReturnType<typeof logoutSuccess>;