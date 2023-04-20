import React, { useState } from 'react';
import style from "../css/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../hook/logout";

const Header = ({ login, setLogin, user, setUser }) => {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [isGnbVisible, setIsGnbVisible] = useState(true);

    const handleLogout = () => {
        logout(setLogin, setUser)
        navigate("/")
    };
    const handleClick = () => {
        setIsHovered(!isHovered);
        setIsGnbVisible(!isGnbVisible);
    };

    return (
        <header className={style.header}>
            <div className={style.header_contain}>
                <h1 className={style.logo}>
                    <Link to="/">
                        <img src={require("../image/logo/logo.png")} alt="logo_image" />
                    </Link>
                </h1>
                <div className={`${style.transition_wrapper} ${isHovered ? style.hovered : ''}`} onClick={handleClick}>
                    <div className={style.element1}></div>
                    <div className={style.element2}></div>
                    <div className={style.element3}></div>
                </div>
                <nav className={`${style.gnb} ${isGnbVisible ? `${style.active}` : ''}`}>
                <ul>
                        <li><Link to="/notice">공지사항</Link></li>
                        <li><Link to="/roomInfo">룸 정보</Link></li>
                        <li><Link to="/reservationStatus">예약 현황</Link></li>
                        <li><Link to="/inquiry">문의 게시판</Link></li>
                    </ul>
                </nav>
                <ul className={style.header_right}>
                    {login ? (
                        <>
                            <li>
                                <Link to="/login">{`${user.name} 님`}</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>로그아웃</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">
                                    <button>login</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signUp">signUp</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>

    );
};

export default Header;
