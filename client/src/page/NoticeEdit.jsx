import React, {useEffect, useState} from 'react';
import style from "../css/noticeWrite.module.css"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const NoticeWrite = ({login}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 ID 값을 가져옵니다.

    useEffect(()=>{
        const getBoard = async () => {
            if(login[0] === 1 && login[1]){
                try {
                    const res = await axios.get(`https://ghd-1.herokuapp.com/api/notice/board/${id}/edit`)
                    const {title,text_area}=res.data[0]
                    setTitle(title)
                    setTextArea(text_area)
                }catch (error){
                    console.log(error)
                }
            }
        }
        getBoard();
    },[id, login])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        }else {
            const data = {
                title: title,
                text_area: textArea
            }
            try {
                if ( login[0] === 1 && login[1] ) {
               await axios.post(`https://ghd-1.herokuapp.com/api/notice/board/${id}/edit/write`, data)
                    navigate("/notice")
                } else {
                    alert("관리자가 아니거나 또는 로그인을 해주세요")
                }
            } catch (err) {
                console.log(err)
            }
        }

    };
    const handleBack = () => {
        navigate("/notice")
    }

    return (
        <section>
            <div className={style.write_contain}>
                <h2>공지사항</h2>
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

export default NoticeWrite;
