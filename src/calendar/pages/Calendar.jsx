import { Calendar as FullCalendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../helpers';
import { EventBox, ModalEvent, Navbar } from "../components"
import { useState } from 'react';

const events = [
    {
        title: 'Cumpleaños Rola',
        notes: 'El pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Daniel'
        }
    }
]

export const Calendar = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const eventStyleGetter = (event, start, end, isSelected) => {
    }

    const onDoubleClick = (event) => {
        console.log({doubleClick: event})
    }

    const onSelect = (event) => {
        console.log({click: event})
    }

    const onViewChanged = (viewSelected) => {
        setLastView(viewSelected);
        localStorage.setItem('lastView', viewSelected);
    }

    return (
        <>
            <Navbar />
            <FullCalendar
                culture='es'
                defaultView={lastView}
                messages={getMessagesEs()}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: EventBox
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <ModalEvent />
        </>
    )
}
