import React, {useEffect, useState} from 'react';
import style from "../css/reservationStatus.module.css";
import "../css/fullCalendar.css"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const ReservationStatus = (props) => {
    const [exData, setExData] = useState([
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-14T12:00:00",
            end: "2023-04-14T12:01:01"
        },
        {
            title : "A",
            name : "박찬우님",
            start : "2023-04-27T07:00:00",
            end: "2023-04-27T12:01:01"
        },



    ])
    const [selectDate, setSelectDate] = useState({}); // ex : 2023 4 28
    const [modal, setModal] = useState(false); // modal close, open

    const handleDateClick = (clickInfo) => {
        // console.log(clickInfo)
        // {
        //     allDay: true,
        //     date: Mon Mar 27 2023 00:00:00 GMT+0900 (한국 표준시) {},
        //     dateStr: "2023-03-27",
        //     dayEl: td.fc-day.fc-day-mon.fc-day-past.fc-day-other.fc-daygrid-day,
        //     jsEvent: MouseEvent {isTrusted: true, screenX: -1341, screenY: 479, clientX: 579, clientY: 300, …},
        //     view: ViewImpl {type: 'dayGridMonth', dateEnv: DateEnv, getCurrentData: ƒ},
        //     [[Prototype]]: Object
        // }
        const date = moment(clickInfo.date);
        const year = date.year();
        const month = date.month() + 1;
        const day = date.date();
        // const time = date.format('HH:mm:ss');
        console.log(year, month, day);
        // 2023 4 28
        setSelectDate({year,month,day});
        setModal(true)
    }
    // const modalRef = useRef(null);
    const handleModalCurrentTarget = (e) => {
        if (e.target === e.currentTarget) {
            setModal(false);
        }
    }
    const eventDidMount = (info) => {
        const eventElement = info.el;
        const eventStart = moment(info.event.start);
        const now = moment();

        // 이벤트 시작 시간이 현재 시간보다 이전이면
        if (eventStart.isBefore(now)) {
            eventElement.style.setProperty('text-decoration', 'line-through');
            eventElement.classList.add('past-event'); // 클래스 추가
        }
        eventElement.style.setProperty('pointer-events', 'none'); // 이벤트에 hover 효과 비활성화

        // 시간 표시 형식 변경
        const startText = moment(info.event.start).locale('en').format('A hh:mm');
        const endText = moment(info.event.end).locale('en').format('A hh:mm');
        eventElement.querySelector('.fc-event-time').textContent = `${startText} ~ ${endText}`;
    };

    useEffect(() => {

    },[] );

    return (
        <section>
            <div className={style.reservation_status_contain}>
                <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    initialView={"dayGridMonth"}
                    locale='ko' // 한국어 설정
                    dateClick={handleDateClick} // 날짜 클릭 이벤트 핸들러 등록
                    events={exData}
                    eventDidMount={eventDidMount} // 마운트될때
                />
                {
                    modal === true ? (
                        <div className={style.reservation_status_modal_contain} onClick={handleModalCurrentTarget}>
                            <div className={style.reservation_status_modal}>

                                {selectDate ? (
                                    <>
                                        <h2>{selectDate.year}년 {selectDate.month}월 {selectDate.day}일</h2>
                                        <h3>예약 현황</h3>
                                        <div>
                                            {
                                                exData
                                                    .filter((data) => {
                                                        const date = moment(data.start);
                                                        const year = date.year();
                                                        const month = date.month() + 1;
                                                        const day = date.date();
                                                        return year === selectDate.year && month === selectDate.month && day === selectDate.day;
                                                    })
                                                    .map((data, index) => {
                                                        const eventStart = moment(data.start);
                                                        const now = moment();
                                                        const isPastEvent = eventStart.isBefore(now);

                                                        return (
                                                            <div key={index} className={`${style.reservation_info} ${isPastEvent ? style['past-event'] : ''}`}>
                                                                <span className={style.dot}></span>
                                                                <h4>{moment(data.start).locale("en").format("A hh:mm")} ~ {moment(data.end).locale("en").format("A hh:mm")}</h4>
                                                                <span className={style.reservation_room}>{data.title}</span>
                                                                <span className={style.reservation_name}>{data.name}</span>
                                                            </div>
                                                        );
                                                    })
                                            }
                                        </div>
                                        <button>추가하기</button>
                                        <button>수정하기</button>
                                        <button>돌아가기</button>
                                    </>
                                ) : (
                                    <div>{selectDate.year}년 {selectDate.month}월 {selectDate.day}일에 예약이 없습니다.</div>
                                )}
                            </div>
                        </div>
                    ) : null
                }

            </div>
        </section>
    );
}

export default ReservationStatus;