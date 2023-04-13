const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

// 이폴더는 맘대로 꺼내가도 된다.
app.use(express.static("build"))
app.get("/", function (req, res){
    res.sendFile(__dirname +"/build/index.html")
})
//
const mainRouter = require("./router/mainRouter");
const signUpRouter = require("./router/signUpRouter");
const loginRouter = require("./router/loginRouter");
const noticeRouter = require("./router/noticeRouter");
const inquiryRouter = require("./router/inquiryRouter");

app.use("/api/main",mainRouter);
app.use("/api/signUp",signUpRouter);
app.use("/api/login", loginRouter);
app.use("/api/notice",noticeRouter);
app.use("/api/inquiry",inquiryRouter);

app.listen(PORT, ()=> {
    console.log("connect");
});
