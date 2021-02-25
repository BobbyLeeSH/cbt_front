import {
    AuthType,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT, LOGOUT_SUCCESS,
    VALIDATE_TOKEN,
    VALIDATE_TOKEN_ERROR,
    VALIDATE_TOKEN_SUCCESS
} from "./actions";
import {AxiosError} from "axios";

const initialState = {authenticated: false, LoginError: null};

interface AuthState {
    authenticated: Boolean,
    LoginError: AxiosError | null;
}

const auth = (
    state: AuthState = initialState,
    action: AuthType // (1)
): AuthState => { // (2)
    switch (action.type) {
        case LOGIN:
            return state;
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                LoginError: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                authenticated: false,
                LoginError: action.payload
            }
        case VALIDATE_TOKEN:
            return state
        case VALIDATE_TOKEN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                LoginError: null
            }
        case VALIDATE_TOKEN_ERROR:
            return {
                ...state,
                authenticated: false,
                LoginError: null
            }
        case LOGOUT:
            return state;
        case LOGOUT_SUCCESS:
            return {...state, authenticated: false, LoginError: null};
        default:
            return state;
    }
};

export default auth;