import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../redux/calendar';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(store => store.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        // TODO: usar API

        // Todo bien
        if (calendarEvent._id) {
            // Actualizar
            dispatch(onUpdateEvent(calendarEvent));
        } else {
            // Crear
            dispatch(onAddNewEvent({... calendarEvent, _id: new Date().getTime()}))
        }
    }

    return {
        // Properties
        activeEvent,
        events,
        // Methods
        setActiveEvent,
        startSavingEvent,
    }
}