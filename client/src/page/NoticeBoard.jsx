import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import style from "../css/noticeBoard.module.css"
import axios from 'axios';


const NoticeBoard = ({ login, setLogin }) => {
    const { id } = useParams(); // URL에서 ID 값을 가져옵니다.
    const [Data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 게시글 가져오기
        const noticeBoard = async () => {
            try {
                const res = await axios.get(`https://ghd-1.herokuapp.com/api/notice/board/${id}`);
                setData(res.data[0]);
            } catch (error) {
                console.error(error);
            }
        };
        noticeBoard();
    }, [id]);
    const deleteBoard = async () => {
        // 게시글 삭제
        try {
            await axios.post(`https://ghd-1.herokuapp.com/api/notice/board/${id}/delete`);
            navigate("/notice")
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <div className={style.notice_board}>
                {Data && (
                    <>
                        <div>
                            <h2>{Data.title}</h2>
                            <span className={style['created-at']}>{Data.created_at && Data.created_at.substring(0, 10)}</span>
                            <span>{Data.author}</span>
                            <span className={style.view}>조회수: {Data.count}</span>
                        </div>
                        <p>{Data.text_area}</p>
                        {login[0] === 1 && login[1] ? (
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
