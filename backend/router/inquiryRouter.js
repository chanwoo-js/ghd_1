const express = require("express");
const router = express.Router();
const db = require("../model/mysql");
const moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
const date = moment().format('YYYY-MM-DD HH:mm:ss');

// 게시글 모두 보여주기
router.get("/",(req, res) => {
    const q = "SELECT id, title, author, created_at, count, admin FROM inquiry_board";
    db.query(q, (error, data) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(data);
        }
    });
})

// 선택된 게시글 보여주기
router.get("/board/:id", (req, res) => {
    const { id } = req.params;
    const q = "SELECT * FROM inquiry_board WHERE id = ?";
    db.query(q, [id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
            console.log(data);
        }
    });
});

// 선택된 게시글 수정하기 눌렀을때 기존 정보 가지고 오기
router.get("/board/:id/edit", (req, res) => {
    const { id } = req.params;
    const q = "SELECT * FROM inquiry_board WHERE id = ?";
    db.query(q, [id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
        }
    });
});

// 수정하기 완료
router.post("/board/:id/edit/write", (req, res) => {
    const { id } = req.params;
    const { title, textArea, author } = req.body;
    console.log(`[${author}] (수정) [title : ${title}] 문의 게시물을 남겼습니다. ${date}`)
    const q = "UPDATE inquiry_board SET title = ?, text_area = ?, created_at = ?  WHERE id = ?";
    db.query(q, [title, textArea, date, id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
        }
    });
});

// 게시판 쓰기
router.post("/write",(req, res) => {
    const { title, author, admin, userId, textArea } = req.body;
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`[${author}] [title : ${title}] 문의 게시물을 남겼습니다. ${date}`)
    const q = `INSERT INTO inquiry_board (title, author, admin, user_id, text_area, created_at) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(q,[title, author, admin, userId, textArea, date],(error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
        }
    });
})

// id를 기준으로 게시글 삭제
router.post("/board/:id/delete", (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM inquiry_board WHERE id = ?";
    db.query(q, [id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json("삭제")
        }
    });
});
// 조회수 +1
router.post("/count/:id", (req, res) => {
    const { id } = req.params;
    const updateCountQuery = "UPDATE inquiry_board SET count = count + 1 WHERE id = ?";
    db.query(updateCountQuery, [id], (error, result) => {
        if (error) {
            console.error(error);
        } else {
            res.json("update");
        }
    });
});


module.exports = router;