import { useEffect, useState } from 'react';
import { Calendar as FullCalendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesEs, localizer } from '../helpers';
import { AdviseResponsiveView, EventBox, EventModal, FabAddNewEvent, Navbar } from "../components"
import { useCalendarStore, useUiStore } from '../../hooks';

export const Calendar = () => {
    const { openEventModal } = useUiStore();
    const { events, startLoadingEvents, startActiveEvent } = useCalendarStore()
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => { startLoadingEvents() }, [])
    

    const eventStyleGetter = (event, start, end, isSelected) => {
    }

    const onDoubleClick = (event) => {
        openEventModal();
    }
    
    const onSelect = (event) => {
        startActiveEvent(event);
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
                className="d-none d-md-flex"
            />
            <EventModal />
            <FabAddNewEvent />
            <AdviseResponsiveView />
        </>
    )
}
