const express = require("express");
const router = express.Router();
const db = require("../model/mysql");
const bcrypt = require("bcrypt");


router.post("/", (req, res, next) => {
    // body 에 실온 userId, userPassword 값 받기
    const {userId, userPassword} = req.body;
    console.log(userId,userPassword)
    // user table 에 col = user_id가 userId 있나?
    const q = "SELECT * FROM user WHERE user_id = ?";
    // 쿼리문에 ?에 배열 형태로 userId 가 들어간다.
    db.query(q, [userId], (err, data) => {
        // 만약 data 에 아이디가 없다면
        if (data.length === 0) {
            console.log(`유저가 ID : ${userId}로 접속을 시도했습니다. 없는 아이디 입니다.`);
            res.json(false);// 실패 전송
        } else {
            // db 에서 아이디를 찾으면
            // 사용자가 입력한 비밀번호 : userPassword 와 db에 저장된 비밀번호 : data[0].hashedPassword와 일치한지 비교한다.
            // 콜백 함수로 err 와 result 를 받는다.
            bcrypt.compare(userPassword, data[0].hashedPassword, (err, result) => {
                // 에러 발생시
                // 1. userPassword 또는 data[0].hashedPassword 값중 하나가 올바르지 않는 형식일 경우
                // 2. 암호화 알고리즘 오류 => bcrypt 라이브러리에서 사용하는 알고리즘 문제 ( 아주 드물게 있다.)
                // 3. 라이브러리 오류 => bcrypt 라이브러리 자체의 버그나 호환성 문제 ( 업데이트로 해결 )
                if (err) {
                    console.log(err, "비밀번호 검사중 에러 발생");
                    res.json(false); // 실패 전송
                } else {
                    // 결과를 받았을 경우
                    // 사용자가 입력한 비밀번호 : password 와 db에 저장된 비밀번호 : data[0].hashedPassword 와 일치한다면
                    if (result) {
                        console.log(`${userId} 유저의 비밀번호가 일치합니다. 로그인 성공`);
                        // user session 정보를 생성할때는 save 를 주고 안에 저장한다.
                        req.session.save(()=>{
                            req.session.user = {
                                userId: data[0].user_id, // 아이디
                                name: data[0].name, // 이름
                                isAdmin: data[0].is_admin, // 관리자
                            };
                            const session_data = req.session;
                            res.status(200).json(session_data);
                            console.log(req.session)
                            // Session {
                            //   cookie: {
                            //     path: '/',
                            //     _expires: 2023-04-15T19:05:52.723Z,
                            //     originalMaxAge: 7200000,
                            //     httpOnly: false,
                            //     secure: false
                            //   },
                            //   user: { userId: 'cksdngh', name: '박찬우', isAdmin: 0 }
                            // }
                            console.log(req.session.user)
                            //{ userId: 'cksdngh', name: '박찬우', isAdmin: 0 }
                            console.log(data)
                            //[
                            //   RowDataPacket {
                            //     id: 34,
                            //     created_at: 2023-04-11T17:33:10.000Z,
                            //     deleted_at: null,
                            //     user_id: 'cksdngh',
                            //     password: 'Cksdn1324132$',
                            //     name: '박찬우',
                            //     phone_number: '01083004174',
                            //     email: 'cksdngh@gmail.com',
                            //     is_admin: 0,
                            //     hashedPassword: '$2b$10$dg76eYbr.6HQ1Pve9Lr5KuW8GEB7Of4f.PrYdxCpz01LMXDuPHbzi'
                            //   }
                            // ]
                        })
                        try {
                            if(req.session.visitCount) {
                                // 방문 횟수 증가
                                req.session.visitCount++;
                                console.log("이미 카운터가 있어서 증가 시켯어용")
                            } else {
                                // 세션 객체에 visitCount 값이 없을 경우 1으로 초기화
                                req.session.visitCount = 1;
                                console.log("카운터 없어용")
                            }
                            // 세션 정보 출력
                            console.log("세션 정보:", req.session);

                            // // 클라이언트에게 방문 횟수 정보 전송
                            // res.status(200).json({ visitCount: req.session.visitCount });
                        } catch (error) {
                            console.log(error);
                            res.status(500).json({ error: "서버 오류 발생" });
                        }


                    } else if (result && data[0].is_admin) {
                        console.log(`${userId} 유저의 비밀번호가 일치합니다. 관리자 로그인 성공`);
                        res.json({success: true, admin: true, message: "로그인 성공"});
                    } else {
                        console.log(`${userId} 유저의 비밀번호가 일치하지 않습니다. 로그인 실패`);
                        res.json({success: false, message: "로그인 실패"});
                    }
                }
            });
        }
    })
});

module.exports = router;
