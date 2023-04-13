import {useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer} from "./export/components"
import "./css/reset.css";
import Main from "./page/Main";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import User from "./page/User";
import Notice from "./page/Notice";
import RoomInfo from "./page/RoomInfo";
import ReservationStatus from "./page/ReservationStatus";
import PageTop from "./page/PageTop";
import SignUpComplete from "./page/SignUpComplete";
import NoticeWrite from "./page/NoticeWrite";
import NoticeBoard from "./page/NoticeBoard";
import NoticeEdit from "./page/NoticeEdit";
import Inquiry from "./page/Inquiry";
import InquiryWrite from "./page/inquiryWrite";
import InquiryBoard from "./page/InquiryBoard";
import InquiryEdit from "./page/InquiryEdit";
import {signUpIdCheck} from "./hook/signUpIdCheck";


function App() {
    const [login, setLogin] = useState([0, false]); // isAdmin, isLoggedIn

    useEffect(() => {
        const result = signUpIdCheck();
        setLogin(result)
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header login={login} setLogin={setLogin} />
                <PageTop/>
                <Routes>
                    <Route path={"/"} element={<Main/>}></Route>
                    <Route path={"/notice"} element={<Notice login={login}/>}></Route>
                    <Route path={"/notice/write"} element={<NoticeWrite login={login}/>}></Route>
                    <Route path={"/notice/board/:id"} element={<NoticeBoard login={login}/>}></Route>
                    <Route path={"/notice/board/:id/edit"} element={<NoticeEdit login={login}/>}></Route>
                    <Route path={"/roomInfo"} element={<RoomInfo/>}></Route>
                    <Route path={"/reservationStatus"} element={<ReservationStatus/>}></Route>
                    <Route path={"/inquiry"} element={<Inquiry login={login}/>}></Route>
                    <Route path={"/inquiry/write"} element={<InquiryWrite login={login}/>}></Route>
                    <Route path={"/inquiry/board/:id"} element={<InquiryBoard login={login}/>}></Route>
                    <Route path={"/inquiry/board/:id/edit"} element={<InquiryEdit login={login}/>}></Route>
                    <Route path={"/login"} element={<Login setLogin={setLogin}/>}></Route>
                    <Route path={"/signUp"} element={<SignUp/>}></Route>
                    <Route path={"/signUp/signUpComplete"} element={<SignUpComplete/>}></Route>
                    <Route path={"/user"} element={<User/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;