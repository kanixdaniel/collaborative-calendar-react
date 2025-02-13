import { useDispatch } from "react-redux"
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNewEvent = () => {
    const dispatch = useDispatch();
    const { openEventModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const onNewEvent = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Daniel'
            }
        });
        openEventModal()
    }

    return (
        <button className="btn btn-primary fab d-none d-md-block" onClick={onNewEvent}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
