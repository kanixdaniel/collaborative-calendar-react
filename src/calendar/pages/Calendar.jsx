import { Calendar as FullCalendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../helpers';
import { EventBox, EventModal, Navbar } from "../components"
import { useState } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';

export const Calendar = () => {
    const { openEventModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore()
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const eventStyleGetter = (event, start, end, isSelected) => {
    }

    const onDoubleClick = (event) => {
        openEventModal();
    }
    
    const onSelect = (event) => {
        setActiveEvent(event);
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
            <EventModal />
        </>
    )
}
