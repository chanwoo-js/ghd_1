const express = require("express");
const router = express.Router();
const db = require("../model/mysql")
const bcrypt = require("bcrypt")
const moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

// 회원가입 정보
router.post("/",(req, res)=>{
    const {user_id, password, name, phone_number, email} = req.body;
    // 해쉬 암호화
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        // password 받지 못했을 경우
        if (err) {
            console.error(err,"hashPassword err");
        }else {
            // password 암호화까지 성공 했을 경우
            const date = moment().format('YYYY-MM-DD HH:mm:ss');
            const q = "INSERT INTO user (`created_at`, `user_id`, `name`, `phone_number`, `email`, `hashedPassword`) VALUES (?, ?, ?, ?, ?, ?)";
            db.query(q,[date ,user_id , name, phone_number, email, hashedPassword],(err, data)=>{
                if(err){
                    console.log(err,"query err")
                    res.json(false);
                }else{
                    console.log(`[${name}]님이 회원가입하셨습니다. ${date}`)
                    res.json(true);
                }
            })
        }
    })
})
// id 중복확인
router.post("/IdCheck",(req, res)=>{
    const user_id = req.body.user_id;
    const q = "SELECT * FROM user WHERE user_id = ?";
    db.query(q, [user_id], (err, data) => {
        if (err) {
            res.json(err);
        } else if(data.length === 0 ) {
            // [] 빈 배열 => 찾지 못했다면
            res.json(true); // 사용가능하다면
        } else {
            // data가 담겼을 경우 => 찾았다면
            res.json(false); // 이미 있다면*
        }
    });
});
module.exports = router;