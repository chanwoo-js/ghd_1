import jwt_decode from "jwt-decode";
import {getLocalStorage} from "./getLocalStorage";

export const signUpIdCheck = () => {
    // value :
    const token = getLocalStorage("token");
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX~~~
    if (token) {
        const decoded = jwt_decode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp > currentTime) {
            return [decoded.isAdmin, true];
        } else {
            // 토큰 유효 기간이 만료된 경우 로그아웃 상태
            return [0, false]
        }
    } else {
        // 토큰이 없다면 로그아웃 상태
        return [0, false]
    }
};
