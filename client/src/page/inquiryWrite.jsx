import React, {useState} from 'react';
import style from "../css/inquiryWrite.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const InquiryWrite = ({login, user}) => {
    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");
    const navigate = useNavigate();

    // 문의 게시판 등록 기능
    const handleSubmit = async (e) => {
        e.preventDefault();
        // 제목과 내용 둘중 하나라도 없으면 경고
        if (!title || !textArea) {
            alert("제목과 내용을 모두 입력해주세요.");
        } else {
            if (!login) {
                return alert("로그인 해주세요");
            }else {
                try{
                    const inquiry_write_data = {
                        title: title,
                        author: user.name,
                        admin: user.admin,
                        userId: user.userId,
                        textArea: textArea,
                    };
                    await axios.post(`${process.env.REACT_APP_API_URL}/api/inquiry/write`, inquiry_write_data)
                        .then(()=>{
                            navigate("/inquiry");
                        })
                }catch (error) {
                    console.log(error)
                }
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
