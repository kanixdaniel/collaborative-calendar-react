import { useDispatch, useSelector } from 'react-redux';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(store => store.calendar);

    return {
        // Properties
        activeEvent,
        events,
        // Methods
    }
}