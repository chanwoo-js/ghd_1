import React from 'react';
import style from "../css/reservationStatus.module.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


const ReservationStatus = (props) => {
    const handleDateClick = (info) => {
        alert('Clicked on date: ' + info.dateStr);
    };

    const handleDateSelect = (selectionInfo) => {
        alert(
            'Selected dates from ' +
            selectionInfo.startStr +
            ' to ' +
            selectionInfo.endStr
        );
    };

    return (
        <section>
            <div className={style.calendar_contain}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    selectable={true}
                    select={handleDateSelect}
                />
            </div>
        </section>
    );
}

export default ReservationStatus;