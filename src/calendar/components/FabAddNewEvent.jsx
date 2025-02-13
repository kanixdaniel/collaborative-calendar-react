import { useDispatch } from "react-redux"
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNewEvent = () => {
    const { openEventModal } = useUiStore();
    const { startActiveEvent, isLoadingEvents } = useCalendarStore();

    const onNewEvent = () => {
        startActiveEvent({
            title: '',
            notes: '',
            start: undefined,
            end: undefined,
            bgColor: '#fafafa'
        });
        openEventModal()
    }

    return (
        <button
            className="btn btn-primary fab d-none d-md-block"
            onClick={onNewEvent}
            disabled={isLoadingEvents}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
