import axios from "axios";

export const logout = async (setLogin, setUser) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/logout`, {}, { withCredentials: true });
    if (res.status === 200) {
        setUser(null)
        setLogin(false)
    }
}
