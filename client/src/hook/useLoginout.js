import jwt_decode from "jwt-decode";

export const getLocalStorageToken = (token) => {
    const value = localStorage.getItem(token);
    if (value) { // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX~~~
        console.log("token true");
        return value
    } else {
        console.log("token false");
        return null
    }
};


export const checkLoginStatus = () => {
    // value :
    const token = getLocalStorageToken("token");
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




export const logout = () => {
    // 로컬 스토리지 토큰 삭제
    localStorage.removeItem("token");
    // 로그아웃, 상태로 바꿉니다.
    return [0, false]
}

