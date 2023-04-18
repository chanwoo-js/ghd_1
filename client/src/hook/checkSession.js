import axios from "axios";

export const checkSession = async (setUser, setLogin) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sessionCheck`, { withCredentials: true });
    if(res.data.user){
        const {isAdmin, name, userId} = res.data.user;
        setUser({
            admin: isAdmin,
            name: name,
            userId : userId
        })
        setLogin(true)
    }
};
