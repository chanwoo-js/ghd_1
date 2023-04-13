import React, {useState} from 'react';
import style from "../css/noticeWrite.module.css"
import axios from "axios";
import jwt_decode from "jwt-decode";
import {getLocalStorage} from "../hook/getLocalStorage";
import {useNavigate} from "react-router-dom";

const NoticeWrite = ({login}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        }else {
            const token = getLocalStorage("token")
            const decoded = jwt_decode(token);
            const data = {
                title: title,
                author: decoded.name,
                admin: decoded.isAdmin,
                text_area: textArea
            }
            try {
                if (decoded.isAdmin === 1 && login[0] === 1 && login[1] && decoded.name === "관리자") {
                    await axios.post("https://ghd-1.herokuapp.com/api/notice/write", data)
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
                        <button type="submit">등록</button>
                        <button type="button" onClick={handleBack}>돌아가기</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NoticeWrite;
