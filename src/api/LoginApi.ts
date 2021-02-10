import API from "./Api";

export const login = async (loginRequest: LoginRequest): Promise<any> => {
    return API.post("/login", loginRequest)
}


export interface LoginRequest {
    username: String,
    password: String
}