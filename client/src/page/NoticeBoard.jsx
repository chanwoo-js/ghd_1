import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import style from "../css/noticeBoard.module.css"
import axios from 'axios';
import moment from "../export/moment";


const NoticeBoard = ({ login, user }) => {
    const { id } = useParams();
    const [noticeBoard, setNoticeBoard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 게시글 가져오기
        const noticeBoard = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/notice/board/${id}`);
                const formatDate = {
                    ...res.data[0],
                    created_at: moment(res.data[0].created_at).format("YYYY-MM-DD HH:mm:ss"),
                };
                setNoticeBoard(formatDate);
            } catch (error) {
                console.error(error);
            }
        };
        noticeBoard();
    }, [id]);
    const deleteBoard = async () => {
        // 게시글 삭제
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/notice/board/${id}/delete`);
            navigate("/notice")
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <div className={style.notice_board}>
                {noticeBoard && (
                    <>
                        <div>
                            <h2>{noticeBoard.title}</h2>
                            <span className={style["created-at"]}>{noticeBoard.created_at.substring(0, 10)}</span>
                            <span className={style["created-at"]}>{noticeBoard.created_at.substring(11, 16)}</span>
                            <span>{noticeBoard.author}</span>
                            <span className={style.view}>조회수: {noticeBoard.count}</span>
                        </div>
                        <p>{noticeBoard.text_area}</p>
                        {user && user.admin === noticeBoard.admin && user.name === noticeBoard.author && login ? (
                            <div className={style.button_contain}>
                                <button><Link to={`/notice/board/${id}/edit`}>수정하기</Link></button>
                                <button onClick={deleteBoard}>삭제하기</button>
                            </div>
                        ) : null}
                    </>
                )}
            </div>
        </section>
    );
};

export default NoticeBoard;
