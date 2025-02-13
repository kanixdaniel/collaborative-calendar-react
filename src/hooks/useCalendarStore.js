import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../redux/calendar';
import { calendarApi } from '../api';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(store => store.calendar);
    const { user } = useSelector(store => store.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        try {
            if (calendarEvent._id) {
                // Actualizar
                dispatch(onUpdateEvent(calendarEvent));
            } else {
                // Crear
                const { data } = await calendarApi.post('/v1/events', calendarEvent)
                const { event } = data;
                dispatch(onAddNewEvent({... calendarEvent, id: event.id, user}))
            }
        } catch (error) {
            console.error(error)
        }
    }

    const startDeleteEvent =  async () => {
        // TODO: usar API

        dispatch(onDeleteEvent());
    }

    return {
        // Properties
        activeEvent,
        events,
        // Methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}