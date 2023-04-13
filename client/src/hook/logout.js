export const logout = () => {
    // 로컬 스토리지 토큰 삭제
    localStorage.removeItem("token");
    // 로그아웃, 상태로 바꿉니다.
    return [0, false]
}