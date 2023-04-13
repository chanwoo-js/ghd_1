import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {getLocalStorage} from "../hook/getLocalStorage"
import style from "../css/inquiryBoard.module.css"
import axios from 'axios';
import jwt_decode from "jwt-decode";


const InquiryBoard = ({ login }) => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [decoded, setDecoded] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        // 게시글 가져오기
        const noticeBoard = async () => {
            const token = getLocalStorage("token");
            if(token){
                const decoded = jwt_decode(token);
                setDecoded(decoded);
            }
            try {
                const res = await axios.get(`https://ghd-1.herokuapp.com/api/inquiry/board/${id}`);
                setData(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        noticeBoard();
    }, [id]);
    const deleteBoard = async () => {
        // 게시글 삭제
        try {
            await axios.post(`https://ghd-1.herokuapp.com/api/inquiry/board/${id}/delete`);
            navigate("/inquiry")
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <div className={style.inquiry_board}>
                {data && (
                    <>
                        <div>
                            <h2>{data.title}</h2>
                            <span className={style['created-at']}>{data.created_at && data.created_at.substring(0, 10)}</span>
                            <span>{data.author}</span>
                            <span className={style.view}>조회수: {data.count}</span>
                        </div>
                        <p>{data.text_area}</p>
                        {decoded && decoded.userId === data.user_id && login[0] === 0 && login[1] ? (
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
