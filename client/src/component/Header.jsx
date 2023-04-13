import React from 'react';
import style from "../css/header.module.css";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../hook/logout";

const Header = ({login, setLogin}) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        setLogin(logout);
        navigate("/")
    };
    return (
        <header className={style.header}>
            <div className={style.header_contain}>
                <h1 className={style.logo}>
                    <Link to="/">
                        <img src={require("../image/logo/logo.png")} alt="logo_image"/>
                    </Link>
                </h1>
                <nav className={style.gnb}>
                    <ul>
                        <li><Link to="/notice">공지사항</Link></li>
                        <li><Link to="/roomInfo">룸 정보</Link></li>
                        <li><Link to="/reservationStatus">예약 현황</Link></li>
                        <li><Link to="/inquiry">문의 게시판</Link></li>
                    </ul>
                </nav>
                <ul className={style.header_right}>
                    {login[1] ? (
                        <>
                            <li>
                                <Link to="/signUp">내 정보</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>로그아웃</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">
                                    <button>로그인</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signUp">회원가입</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>

);
};

export default Header;