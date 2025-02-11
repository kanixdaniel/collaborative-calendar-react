import { Calendar as FullCalendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { getMessagesEs, localizer } from '../helpers';
import { EventBox, Navbar } from "../components"

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
    const eventStyleGetter = (event, start, end, isSelected) => {
    }

    return (
        <>
            <Navbar />
            <FullCalendar
                culture='es'
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
            />
        </>
    )
}
