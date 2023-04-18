import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import style from "../css/inquiryBoard.module.css"
import axios from 'axios';
import moment from "../export/moment"



const InquiryBoard = ({ login ,user}) => {
    const { id } = useParams();
    const [inquiryBoard, setInquiryBoard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 게시글 가져오기
        const inquiryBoard = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inquiry/board/${id}`);
                const formatDate = {
                    ...res.data[0],
                    created_at: moment(res.data[0].created_at).format("YYYY-MM-DD HH:mm:ss"),
                };
                setInquiryBoard(formatDate);
            } catch (error) {
                console.log(error);
            }
        };
        inquiryBoard();
    }, [id]);
    const deleteBoard = async () => {
        // 게시글 삭제
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/inquiry/board/${id}/delete`);
            navigate("/inquiry")
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <div className={style.inquiry_board}>
                {inquiryBoard && (
                    <>
                        <div>
                            <h2>{inquiryBoard.title}</h2>
                            <span className={style["created-at"]}>{inquiryBoard.created_at.substring(0, 10)}</span>
                            <span className={style["created-at"]}>{inquiryBoard.created_at.substring(11, 16)}</span>
                            <span>{inquiryBoard.author}</span>
                            <span className={style.view}>조회수: {inquiryBoard.count}</span>
                        </div>
                        <p>{inquiryBoard.text_area}</p>
                        {user.userId === inquiryBoard.user_id && user.name === inquiryBoard.author && login ? (
                            <div className={style.button_contain}>
                                <button><Link to={`/inquiry/board/${id}/edit`}>수정하기</Link></button>
                                <button onClick={deleteBoard}>삭제하기</button>
                            </div>
                        ) : null}
                    </>
                )}
            </div>
        </section>
    );
};

export default InquiryBoard;
