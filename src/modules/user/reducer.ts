import {
    UserInfoType,
    GET_USER_INFO,
    GET_USER_INFO_ERROR,
    GET_USER_INFO_SUCCESS
} from "./actions";
import {AxiosError} from "axios";

const initialState = {username: "", roles: [], userInfoError: null};

interface UserState {
    username: string,
    roles: string[],
    userInfoError: AxiosError | null;
}

const userInfo = (
    state: UserState = initialState,
    action: UserInfoType // (1)
): UserState => { // (2)
    switch (action.type) {
        case GET_USER_INFO:
            return state;
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                roles: action.payload.roles,
                userInfoError: null
            }
        case GET_USER_INFO_ERROR:
            return {
                ...state,
                username: "",
                roles: [],
                userInfoError: action.payload
            }
        default:
            return state;
    }
};

export default userInfo;