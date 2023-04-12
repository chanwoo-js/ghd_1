import {useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./css/reset.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Header from "./component/Header/Header.jsx";
import Notice from "./pages/Notice";
import RoomInfo from "./pages/RoomInfo";
import ReservationStatus from "./pages/ReservationStatus";
import Footer from "./component/Footer/Footer";
import PageTop from "./pages/PageTop";
import SignUpComplete from "./pages/SignUpComplete";
import NoticeWrite from "./pages/NoticeWrite";
import NoticeBoard from "./pages/NoticeBoard";
import NoticeEdit from "./pages/NoticeEdit";
import Inquiry from "./pages/Inquiry";
import InquiryWrite from "./pages/inquiryWrite";
import InquiryBoard from "./pages/InquiryBoard";
import InquiryEdit from "./pages/InquiryEdit";
import {checkLoginStatus} from "./hook/useLoginout";


function App() {
    const [login, setLogin] = useState([0, false]); // isAdmin, isLoggedIn

    useEffect(() => {
        const result = checkLoginStatus();
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