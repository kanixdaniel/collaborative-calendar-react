import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetLoadingEvents, onSetActiveEvent, onSetEvents, onUpdateEvent } from '../redux/calendar';
import { calendarApi } from '../api';
import { convertDateOfEvents } from '../calendar/helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent, isLoadingEvents } = useSelector(store => store.calendar);
    const { user } = useSelector(store => store.auth);

    const startLoadingEvents = async () => {
        try {
            dispatch(onSetLoadingEvents(true));
            const { data } = await calendarApi.get('/v1/events');
            const events = convertDateOfEvents(data.events)
            dispatch(onSetEvents(events));
        } catch (error) {
            dispatch(onSetLoadingEvents(false));
            console.error(error);
            Swal.fire('Error al obtener los eventos', error.response.data.message, 'error');
        }
    }

    const startActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        dispatch(onSetLoadingEvents(true));
        try {
            if (calendarEvent.id) {
                // Actualizar
                await calendarApi.put(`/v1/events/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({ ...calendarEvent, user }));
                return;
            }

            // Crear
            const { data } = await calendarApi.post('/v1/events', calendarEvent)
            const { event } = data;
            dispatch(onAddNewEvent({ ...calendarEvent, id: event.id, user }))
        } catch (error) {
            dispatch(onSetLoadingEvents(false));
            console.error(error);
            Swal.fire('Error al guardar', error.response.data.message, 'error');
        }
    }

    const startDeleteEvent = async () => {
        dispatch(onSetLoadingEvents(true));
        try {
            await calendarApi.delete(`/v1/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());
            Swal.fire('Se ha eliminado el evento', '', 'success');
        } catch (error) {
            dispatch(onSetLoadingEvents(false));
            console.error(error);
            Swal.fire('Error al eliminar el evento', error.response.data.message, 'error');
        }
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