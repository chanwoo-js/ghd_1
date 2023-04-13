import React, {useEffect, useState} from 'react';
import axios from "axios";

const User = (props) => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
        const fetchAllUser = async()=>{
            try{
                const data = (await axios.get("https://ghd-1.herokuapp.com/api/User")).data
                console.log(data)
                setUser(data)
            }catch(err){
                console.log(err)
            }
        };
        fetchAllUser().then(r => {});
    },[]);

    // 삭제하는 핸들러
    const handleDelete = async (user_id) => {
        try {
            await axios.delete("https://ghd-1.herokuapp.com/api/user/"+user_id);
            window.location.reload();

        }catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h1>USER 정보</h1>
            <div className={"users"}>
                {user.map((user)=> (
                    <div className={"user"} key={user.id}>
                        {console.log(user)}
                        <div>{user.name}</div>
                        <div>{user.user_id}</div>
                        <div>{user.password}</div>
                        <div>{user.phone_number}</div>
                        <div>{user.email}</div>
                        <div>{user.create_at}</div>
                        <div>{user.delete_at}</div>
                        <div>{user.is_admin}</div>
                        <button className={"delete"} onClick={()=>handleDelete(user.user_id)}>삭제</button>
                        <button></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;