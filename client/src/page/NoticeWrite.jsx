import React, {useState} from 'react';
import style from "../css/noticeWrite.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NoticeWrite = ({login,user}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        }else {
            console.log(user)
            const notice_write_data = {
                title: title,
                author: user.name,
                admin: user.admin,
                textArea: textArea
            }
            try {
                if (user.admin === 1 && login && user.name === "관리자") {
                    await axios.post(`${process.env.REACT_APP_API_URL}/api/notice/write`, notice_write_data)
                        .then(()=>{
                            navigate("/notice");
                        })
                } else {
                    alert("관리자가 아니거나 또는 로그인을 해주세요")
                }
            }catch (error) {
                console.log(error)
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
                        <button type="submit">등록</button>
                        <button type="button" onClick={handleBack}>돌아가기</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NoticeWrite;
