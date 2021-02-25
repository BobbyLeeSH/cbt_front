import {AxiosError} from "axios";
import {UserInfo} from "../../api/UserInfoApi";


export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS' as const;
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR' as const;

// 액션 생성함수
export const getUserInfo = () => ({type: GET_USER_INFO});
export const getUserInfoSuccess = (data: UserInfo) => ({type: GET_USER_INFO_SUCCESS, payload: data});
export const getUserInfoError = (error: AxiosError) => ({type: GET_USER_INFO_ERROR, payload: error});

// 액션객체 타입
export type UserInfoType =
    | ReturnType<typeof getUserInfo>
    | ReturnType<typeof getUserInfoSuccess>
    | ReturnType<typeof getUserInfoError>;