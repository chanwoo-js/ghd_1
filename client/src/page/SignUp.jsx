import React, {useState} from 'react';
import style from "../css/signUp.module.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUp = (props) => {
    const [userId, setUserId] = useState(["",false]); // 아이디
    const [userCheckDuplicateId, setUserCheckDuplicateId] = useState(null);
    const [password, setPassword] = useState(["",false]); // 비밀번호
    const [passwordConfirm, setPasswordConfirm] = useState(["",false]); // 비밀번호 재확인
    const [name, setName] = useState(["",false]); // 이름
    const [phoneNumber, setPhoneNumber] = useState(["",false]); // 핸드폰 번호
    const [email, setEmail] = useState(["",false]); // 이메일
    const navigate = useNavigate();

    // 아이디
    const userIdOnChange = (e) => {
        // 영문과 숫자만 포함하는 정규식
        const regex = /^[a-zA-Z0-9]{4,13}$/;
        const idValid = regex.test(e.target.value);
        setUserId([e.target.value, idValid]);
        setUserCheckDuplicateId(null);
    };
    // 중복확인
    const handleCheckDuplicateId = async (e) => {
        e.preventDefault();
        const info = {
            user_id: userId[0]
        }
        try {
            const res = await  axios.post("https://ghd-1.herokuapp.com/api/signUp/IdCheck", info)
            setUserCheckDuplicateId(res.data);
            if (res.data) {
                alert("사용 가능한 아이디 입니다.")
            }else{
                alert("이미 있는 아이디 입니다. 다른 아이디를 적어주세요")
            }
        }catch (err) {
            console.log(err);
        }
    };
    // 패스워드
    const passwordOnChange = (e) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        const passwordValid = passwordRegex.test(e.target.value);
        setPassword([e.target.value, passwordValid]);
    }
    const passwordConfirmOnChange = (e) => {
        const value = e.target.value;
        if(value === password[0]){
            setPasswordConfirm([value,true])
        }
        else {
            setPasswordConfirm([value,false])
        }
    }
    // 이름
    const nameOnChange = (e) => {
        const nameRegex = /^[a-zA-Z가-힣]+$/;
        const nameValid = nameRegex.test(e.target.value);
        const nameValidSpace = e.target.value.replace(/\s/g, "");
        setName([nameValidSpace, nameValid]);
    }
    // 핸드폰 번호
    const phoneNumberOnChange = (e) => {
        const phoneRegex = /^01(?:0|1|[6-9])\d{7,8}$/;
        const phoneNumber = e.target.value.replace(/-/g, ""); // 하이픈 제거
        const phoneValid = phoneRegex.test(phoneNumber);
        setPhoneNumber([phoneNumber,phoneValid]);
    }
    const emailOnChange = (e) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValid = emailRegex.test(e.target.value);
        setEmail([e.target.value,emailValid]);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // 아이디 수정 확인
        if (userCheckDuplicateId && password[1] && passwordConfirm[1] && name[1] && phoneNumber[1] && email[1]){
            const info = {
                user_id: userId[0],
                password: password[0],
                name: name[0],
                phone_number: phoneNumber[0],
                email: email[0],
            };
            try {
                const res = await axios.post("https://ghd-1.herokuapp.com/api/signUp", info)
                if (res.data){
                    navigate('/signUp/signUpComplete');
                }
            } catch (err) {
                console.log(err);
            }
        }else {
            alert("중복확인을 눌러주세요");
        }

    }

    return (
        <section className={style.signUp}>
            <div className={style.signUp_contain}>
                <h2>회원가입</h2>
                <fieldset>
                    <legend>*필수사항</legend>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className={style.id_contain}>
                            <label htmlFor="user_id">아이디</label>
                            <input
                                type="text"
                                name="user_id"
                                id="user_id"
                                value={userId[0]}
                                onChange={userIdOnChange}
                                placeholder="아이디(영문+숫자)를 입력해주세요(최소 4자리 ~ 최대 13자리)"
                                required
                                maxLength={13}
                                style={
                                    userId[0] === ""
                                        ? { backgroundColor: "white" }
                                        : userId[1] && userCheckDuplicateId
                                            ? { backgroundColor: "rgb(232, 240, 254)" }
                                            : { backgroundColor: "rgb(246, 223, 235)" }
                                }
                            />
                            <button
                                type="button"
                                onClick={handleCheckDuplicateId}
                                disabled={!userId[1]}
                            >
                                중복확인
                            </button>
                            {
                                userId[0] !== "" && (
                                    <p>
                                        {!userId[1]
                                            ? "아이디(영문+숫자)를 입력해주세요(최소 4자리 ~ 최대 13자리)"
                                            : userCheckDuplicateId === null
                                                ? "중복 확인을 눌러주세요"
                                                : ""}
                                    </p>
                                )
                            }

                        </div>
                        <div className={style.password_contain}>
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password[0]}
                                onChange={passwordOnChange}
                                placeholder="비밀번호를 입력하세요"
                                required
                                style={
                                    password[0].length === 0
                                        ? {backgroundColor: "rgb(255, 255, 255)"}
                                        : password[1]
                                            ?{backgroundColor: "rgb(232, 240, 254)"}
                                            :{backgroundColor: "rgb(246, 223, 235)"}
                                }
                            />
                            <input
                                type="password"
                                name="password_confirm"
                                id="password_confirm"
                                value={passwordConfirm[0]}
                                onChange={passwordConfirmOnChange}
                                placeholder="비밀번호를 다시 한번 입력하세요"
                                required
                                style={
                                    password[0].length === 0
                                        ? {backgroundColor: "rgb(255, 255, 255)"}
                                        :password[0] === passwordConfirm[0]
                                            ? {backgroundColor: "rgb(232, 240, 254)"}
                                            : {backgroundColor: "rgb(246, 223, 235)"}
                                }

                            />
                            {
                                password[0].length !== 0 && (
                                    <>
                                        {password[1]
                                            ? null
                                            : (<p style={{color: "gray"}}>
                                                비밀번호는 최소 6자리 이상, 최대 15자리 이하의 대문자, 소문자, 숫자를 각각 최소 1개 이상 포함해야 합니다.
                                            </p>)
                                        }
                                        {passwordConfirm[0] !== "" &&
                                            (<p style={{color: "gray"}}>{
                                                password[0] === passwordConfirm[0]
                                                    ? "일치합니다."
                                                    : "일치하지 않습니다."
                                            }</p>)
                                        }
                                    </>
                                )
                            }

                        </div>
                        {/*name_contain*/}
                        <div>
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name[0]}
                                onChange={nameOnChange}
                                placeholder="성명(한글)"
                                required

                            />
                        </div>
                        {/*phoneNumber_contain*/}
                        <div>
                            <label htmlFor="phone_number">핸드폰번호</label>
                            <input
                                type="tel"
                                name="phone_number"
                                id="phone_number"
                                value={phoneNumber[0]}
                                onChange={phoneNumberOnChange}
                                placeholder="01012345678"
                                required
                                style={
                                    phoneNumber[0].length === 0
                                        ? {backgroundColor : "rgb(255,255,255)"}
                                        : phoneNumber[1]
                                            ? {backgroundColor: "rgb(232, 240, 254)"}
                                            : {backgroundColor: "rgb(246, 223, 235)"}
                                }
                            />
                            {
                                phoneNumber[0] !== "" && (
                                    <p style={{ color: "gray" }}>
                                        {phoneNumber[1]
                                            ? "올바른 핸드폰 번호입니다."
                                            : "예) 01012345678 다시 한번 확인해 주세요."}
                                    </p>
                                )
                            }


                        </div>
                        {/*email_contain*/}
                        <div>
                            <label htmlFor="email">이메일</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email[0]}
                                onChange={emailOnChange}
                                placeholder={"이메일 주소를 입력하세요"}
                                required
                                style={ email[0].length === 0
                                    ? {backgroundColor : "rgb(255,255,255)"}
                                    : email[1]
                                        ? {backgroundColor: "rgb(232, 240, 254)"}
                                        : {backgroundColor: "rgb(246, 223, 235)"}
                                }
                            />
                            {

                            }
                        </div>
                        {/*submit_button*/}
                        <div className={style.signUp_button_contain}>
                            <button className={style.signUp_button} type="submit" name="submit" value="submit">가입하기</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </section>
    );
};

export default SignUp;