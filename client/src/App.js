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
import {checkSession} from "./hook/checkSession";


function App() {
    const [user , setUser] = useState(null)
    const [login, setLogin] = useState(false); // isLoggedIn

    useEffect(() => {
        checkSession(setUser, setLogin);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header login={login} setLogin={setLogin} user={user} setUser={setUser}/>
                <PageTop/>
                <Routes>
                    <Route path={"/"} element={<Main/>}></Route>
                    <Route path={"/notice"} element={<Notice login={login} user={user}/>}></Route>
                    <Route path={"/notice/write"} element={<NoticeWrite login={login} user={user}/>}></Route>
                    <Route path={"/notice/board/:id"} element={<NoticeBoard login={login} user={user}/>}></Route>
                    <Route path={"/notice/board/:id/edit"} element={<NoticeEdit login={login}/>}></Route>
                    <Route path={"/roomInfo"} element={<RoomInfo/>}></Route>
                    <Route path={"/reservationStatus"} element={<ReservationStatus/>}></Route>
                    <Route path={"/inquiry"} element={<Inquiry login={login} />}></Route>
                    <Route path={"/inquiry/write"} element={<InquiryWrite login={login} user={user}/>}></Route>
                    <Route path={"/inquiry/board/:id"} element={<InquiryBoard login={login} user={user}/>}></Route>
                    <Route path={"/inquiry/board/:id/edit"} element={<InquiryEdit login={login} user={user}/>}></Route>
                    <Route path={"/login"} element={<Login setLogin={setLogin} user={user} setUser={setUser} />}></Route>
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