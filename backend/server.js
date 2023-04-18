const express = require("express");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const app = express();
const PORT = process.env.PORT || 8000;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("build"))
app.use(cors({
    origin: "http://localhost:3000", // 개발 환경 클라이언트 로컬 주소
    method : ["GET", "POST"],
    credentials: true
}));
// origin: process.env.PORT, // 배포할때 바꾸기
app.use(
    session({
        name: "session_id",
        secret: "Enddlsepdy", // session 비밀키
        resave: false, // session 데이터가 변경되지 않더라도 매 요청 시마다 세션을 저장소에 다시 저장할지 여부를 결정하는 값
        saveUninitialized: false, // 새로운 세션을 저장소에 저장할지 여부를 결정하는 값
        store : new FileStore(),
        cookie: { // 세션 쿠키 설정
            httpOnly: false, // 클라이언트 측 JavaScript 에서 쿠키에 접근할 수 없음, 개발환경이라면 false 해주기
            secure: false, // Https 를 사용할 때만 쿠키를 전송할지 여부를 결정, http 개발환경이라면 false 로 해주기
            maxAge: 2 * 60 * 60 * 1000, // 쿠키의 최대 수명을 밀리초 단위로 설정 - 2시간
        },
    })
);

const sessionCheckRouter = require("./router/sessionCheckRouter");
const signUpRouter = require("./router/signUpRouter");
const loginRouter = require("./router/loginRouter");
const logoutRouter = require("./router/logoutRouter");
const noticeRouter = require("./router/noticeRouter");
const inquiryRouter = require("./router/inquiryRouter");

app.use("/api/sessionCheck",sessionCheckRouter);
app.use("/api/signUp",signUpRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout",logoutRouter);
app.use("/api/notice",noticeRouter);
app.use("/api/inquiry",inquiryRouter);

// 이폴더는 맘대로 꺼내가도 된다.
app.get("*", function (req, res, next) {
    if (req.path.startsWith("/api/")) {
        return next();
    }
    res.sendFile(__dirname + "/build/index.html");
});


app.listen(PORT, ()=> {
    console.log("connect");
});