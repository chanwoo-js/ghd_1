import React, {useState} from 'react';
import style from "../css/inquiryWrite.module.css"
import axios from "axios";
import jwt_decode from "jwt-decode";
import {getLocalStorage} from "../hook/getLocalStorage";
import {useNavigate} from "react-router-dom";

const InquiryWrite = ({login}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        } else {
            const token = getLocalStorage("token");
            // 토큰이 존재하고 유효한 형식인지 확인합니다.
            if (!token || token.split(".").length !== 3) {
                alert("유효하지 않은 토큰입니다.");
                return;
            }
            const decoded = jwt_decode(token);
            console.log(decoded)
            const data = {
                title: title,
                author: decoded.name,
                userId: decoded.userId,
                admin: decoded.isAdmin,
                text_area: textArea,
            };
            console.log(decoded.userId);
            try {
                if (decoded.isAdmin === 0 && login[0] === 0 && login[1]) {
                    await axios.post("https://ghd-1.herokuapp.com/api/inquiry/write", data);
                    navigate("/inquiry");
                } else {
                    alert("로그인을 해주세요");
                }
            } catch (err) {
                console.log(err);
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
                        <button type="submit">등록</button>
                        <button type="button" onClick={handleBack}>돌아가기</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default InquiryWrite;
