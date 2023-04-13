import React, {useEffect, useState} from 'react';
import style from "../css/inquiryWrite.module.css"
import axios from "axios";
import jwt_decode from "jwt-decode";
import {getLocalStorage} from "../hook/getLocalStorage";
import {useNavigate, useParams} from "react-router-dom";

const InquiryEdit = ({login}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const [userId, setUserId] = useState("")
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 ID 값을 가져옵니다.

    // 마운트시 글 정보 불러오기
    useEffect(()=>{
        const getBoard = async () => {
            if(login[0] === 0 && login[1]){
                try {
                    const res = await axios.get(`https://ghd-1.herokuapp.com/api/inquiry/board/${id}/edit`)
                    const {title,text_area,user_id}=res.data[0]
                    setTitle(title)
                    setTextArea(text_area)
                    setUserId(user_id)
                }catch (error){
                    console.log(error)
                }
            }
        }
        getBoard();
    },[id, login])

    //
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        }else {
            const token = getLocalStorage("token")
            const decoded = jwt_decode(token);
            const data = {
                title: title,
                admin: decoded.isAdmin,
                text_area: textArea
            }
            try {
                if (decoded.isAdmin === 0 && login[0] === 0 && login[1] && decoded.userId === userId ) {
                    await axios.post(`https://ghd-1.herokuapp.com/api/inquiry/board/${id}/edit/write`, data)
                    navigate("/inquiry")
                } else {
                    alert("관리자가 아니거나 또는 로그인을 해주세요")
                }
            } catch (err) {
                console.log(err)
            }
        }

    };
    const handleBack = () => {
        navigate("/inquiry")
    }

    return (
        <section>
            <div className={style.write_contain}>
                <h2>문의 게시판</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력해주세요"
                        required
                    />
                    <textarea
                        name="text_area"
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                        rows={10}
                        maxLength={1000}
                        placeholder="내용을 입력해주세요"
                        required
                    ></textarea>
                    <div className={style.button}>
                        <button type="submit">수정</button>
                        <button type="button" onClick={handleBack}>돌아가기</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default InquiryEdit;
