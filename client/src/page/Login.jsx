import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import style from "../css/login.module.css";
import {Link} from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';


const Login = ({setLogin}) => {
    const [userId, setUserId] = useState(["",false]);
    const [password, setPassword] = useState(["",false]);
    const navigate = useNavigate();

    const handleUserIdChange = (e) => {
        const idRegex = /^[a-zA-Z0-9]{4,13}$/;
        const idValid = idRegex.test(e.target.value);
        setUserId([e.target.value, idValid]);
    };

    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        const passwordValid = passwordRegex.test(e.target.value);
        setPassword([e.target.value, passwordValid]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userId[1] && password[1]) { // 유효성 검사
            const info = {
                userId: userId[0],
                password: password[0]
            };
            try {
                const res = await axios.post("https://ghd-1.herokuapp.com/api/login", info)
                const token = res.data.token;
                // console.log(token)
                // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja3NkbmdoIiwiaXNBZG1pbiI6MSwiaWF0IjoxNjgwNTkwMTM2LCJleHAiOjE2ODA1OTczMzZ9.jbDWer2LCodbgJ6WNtCuxegcyvWdEt2ASFMuijLK8XE
                const decoded = jwt_decode(token);
                // console.log(decoded);
                // {userId: 'cksdngh', isAdmin: 1, iat: 1680584862, exp: 1680592062}
                if (token) {
                    if (decoded.isAdmin === 1) {
                        // 관리자라면 관리자 권한 부여 로직을 여기에 추가합니다.
                        alert("관리자로 로그인 되었습니다.")
                        //토큰을 로컬 스토리지에 저장하고
                        localStorage.setItem("token", token);
                        setLogin([decoded.isAdmin,true])
                        navigate('/');

                    }else {
                        // 관리자가 아니라면 바로 로컬 스토리지에 저장
                        alert("로그인 되었습니다.")
                        localStorage.setItem("token", token);
                        setLogin([decoded.isAdmin,true]);
                        navigate('/');

                    }
                }else{
                    alert("아이디 또는 비밀번호가 일치하지 않습니다.")
                }
            }
            catch(err)
            {
                console.log(err);
            }
        }
    }
    return (
        <section>
            <div className={style.login_contain}>
                <h2>로그인</h2>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <div className={style.user_id_contain}>
                            <input
                                type="text"
                                name="user_id"
                                required
                                placeholder="아이디를 입력해주세요"
                                value={userId[0]}
                                onChange={handleUserIdChange} />
                        </div>
                        <div className={style.password_contain}>
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력해주세요"
                                required
                                value={password[0]}
                                onChange={handlePasswordChange} />
                        </div>
                    </div>
                    <button type="submit">로그인</button>
                    <ul className={style.sub_menu_contain}>
                        <li>
                            <input type="checkbox" id="id_memory"/>
                            <label htmlFor="id_memory">ID 저장</label>
                        </li>
                        <li className={style.find_contain}>
                            <button>ID</button>
                            <span>&nbsp;/&nbsp;</span>
                            <button> PW</button>
                            <span>&nbsp;찾기</span>
                        </li>
                        <li>
                            {
                                userId[0] === "" && userId[1] === false ? null :
                                    <>
                                        {userId[1] === false && (<p>아이디(영문+숫자)를 입력해주세요(최소 4자리 ~ 최대 13자리)</p>)}
                                    </>
                            }
                            {
                                password[0] === "" && password[1] === false ? null :
                                    <>
                                        {password[1] === false && (<p>비밀번호는 최소 6자리 이상, 최대 15자리 이하의 대문자, 소문자, 숫자를 각각 최소 1개 이상 포함해야 합니다.</p>)}
                                    </>
                            }

                        </li>
                    </ul>

                    <div className={style.signUp_contain}>
                        <h3>아직 회원이 아니신가요?</h3>
                        <p>회원이 되시면 이벤트 참여 등 다양한 혜택을 누리실 수 있습니다.</p>
                        <Link className={style.signUp_button} to="/SignUp">회원가입</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;