import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadingEvents, onSetActiveEvent, onSetEvents, onUpdateEvent } from '../redux/calendar';
import { calendarApi } from '../api';
import { convertDateOfEvents } from '../calendar/helpers';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent, isLoadingEvents } = useSelector(store => store.calendar);
    const { user } = useSelector(store => store.auth);

    const startLoadingEvents = async () => {
        try {
            dispatch(onLoadingEvents());
            const { data } = await calendarApi.get('/v1/events');
            const events = convertDateOfEvents(data.events)
            dispatch(onSetEvents(events));
        } catch (error) {
            console.error(error);
        }
    }

    const startActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        dispatch(onLoadingEvents());
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
            console.error(error);
        }
    }

    const startDeleteEvent = async () => {
        dispatch(onLoadingEvents());
        // TODO: usar API

        dispatch(onDeleteEvent());
    }

    return {
        // Properties
        activeEvent,
        events,
        isLoadingEvents,
        // Methods
        startLoadingEvents,
        startActiveEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}