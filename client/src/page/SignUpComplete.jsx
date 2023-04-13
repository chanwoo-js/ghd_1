import React from 'react';
import {Link} from "react-router-dom";
import style from '../css/signUpComplete.module.css';


const SignUpComplete = (props) => {
    return (
        <section>
            <div className={style.signUp_complete_contain}>
                <div className={style.image_contain}>
                    <img src={require("../image/complete/check.png")} alt="회원가입 완료" />
                </div>
                <h2>회원가입이 완료되었습니다.</h2>
                <p>로그인 후 안전하고 편리하게 ghd 서비스를 이용하실 수 있습니다.</p>
                <div className={style.button_contain}>
                    <Link to="/">
                        <button>홈으로</button>
                    </Link>
                    <Link to="/login">
                        <button>로그인</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SignUpComplete;
