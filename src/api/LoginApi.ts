import API from "./Api";

export const login = async (loginRequest: LoginRequest): Promise<any> => {
    return API.post("/login", loginRequest)
}

export const auth = async (): Promise<any> => {
    return API.get("/auth")
}

export interface LoginRequest {
    username: String,
    password: String
}