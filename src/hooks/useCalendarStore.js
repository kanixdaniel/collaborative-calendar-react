import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent } from '../redux/calendar';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(store => store.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    return {
        // Properties
        activeEvent,
        events,
        // Methods
        setActiveEvent,
    }
}