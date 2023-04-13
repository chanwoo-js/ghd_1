import React from 'react';
import style from "../css/footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_contain}>
                <div className={style.footer_left}>
                    <Link to="/">
                        <img src={require("../image/logo/logo_black.png")} alt="logo_image"/>
                    </Link>
                </div>
                <div className={style.footer_right}>
                    <h2 className={style.company_name}>goodhoodstudio</h2>
                    <p>
                        goodhoodstudio 4th floor 13 Seongsuil-ro 1-gil Seongdong-gu Seoul Republic of Korea
                    <br />
                    서울시 성동구 성수일로1길 13 (성수동 1가, 정우빌딩) 4층
                    <br />
                    대표전화 : 010-8647-9224 | 이메일 : goodhoodstudio@naver.com , kakao @굿후드
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
