const express = require("express");
const router = express.Router();

router.post("/", (req, res)=>{
    // 세션 삭제
    req.session.destroy(()=>{
        // 세션 쿠키 삭제
        res.clearCookie('session_id');
        res.status(200).json({message : "로그아웃 완료"})
    })
})

module.exports = router;