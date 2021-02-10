import {AuthType, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from "./actions";
import {AxiosError} from "axios";

const initialState = {token: "", error: null};

interface AuthState {
    token: String,
    error: AxiosError | null;
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
                token: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT:
            return {...state, token: "", error: null};
        default:
            return state;
    }
};

export default auth;