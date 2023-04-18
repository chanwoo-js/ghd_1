const express = require("express");
const router = express.Router();
const db = require("../model/mysql");
const moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

router.get("/",(req, res) => {
    // const q = "SELECT * FROM ghd.notice_board";
    const q = "SELECT id, title, author, created_at, count, admin FROM notice_board";
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
    const q = "SELECT * FROM notice_board WHERE id = ?";
    db.query(q, [id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
        }
    });
});
// 선택된 게시글 수정하기 눌렀을때 기존 정보 가지고 오기
router.get("/board/:id/edit", (req, res) => {
    const { id } = req.params;
    const q = "SELECT * FROM notice_board WHERE id = ?";
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
    const { title, text_area } = req.body;
    const q = "UPDATE notice_board SET title = ?, text_area = ? WHERE id = ?";
    db.query(q, [title, text_area, id], (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.json(data);
        }
    });
});

// 공지사항 쓰기
router.post("/write",(req, res) => {
    const { title, author, admin ,textArea} = req.body;
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`[${author}] [title : ${title}] 문의 게시물을 남겼습니다. ${date}`)
    const q = `INSERT INTO notice_board (title, author, admin, text_area, created_at) VALUES (?, ?, ?, ?, ?)`;
    db.query(q,[title, author, admin, textArea, date],(error, data) => {
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
    const q = "DELETE FROM notice_board WHERE id = ?";
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
    const updateCountQuery = "UPDATE notice_board SET count = count + 1 WHERE id = ?";
    db.query(updateCountQuery, [id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json("update");
        }
    });
});


module.exports = router;