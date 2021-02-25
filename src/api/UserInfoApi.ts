import API from "./Api";

export const getUserInfo = async (): Promise<UserInfo> => {
    return API.get("/users/me")
}

export interface UserInfo {
    username: string,
    roles: string[]
}