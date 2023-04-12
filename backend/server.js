const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// 이폴더는 맘대로 꺼내가도 된다.
app.use(express.static("build"))
app.get("/", function (req, res){
    res.sendFile(__dirname +"/build/index.html")
})

const mainRouter = require("./router/mainRouter");
app.use("/main",mainRouter);

// const userRouter = require("./router/userRouter");
// app.use("/user",userRouter);

const signUpRouter = require("./router/signUpRouter");
app.use("/signUp",signUpRouter);

const loginRouter = require("./router/loginRouter");
app.use("/login", loginRouter);

const noticeRouter = require("./router/noticeRouter");
app.use("/notice",noticeRouter);

const inquiryRouter = require("./router/inquiryRouter");
app.use("/inquiry",inquiryRouter);


app.listen(PORT, ()=> {
    console.log("connect");
});
