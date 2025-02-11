import { useDispatch, useSelector } from "react-redux"
import { onCloseEventModal, onOpenEventModal } from "../redux/ui";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isEventModalOpen } = useSelector(state => state.ui);

    const openEventModal = () => {
        dispatch(onOpenEventModal())
    }

    const closeEventModal = () => {
        dispatch(onCloseEventModal())
    }

    return {
        // Properties
        isEventModalOpen,
        // methods
        openEventModal,
        closeEventModal,
    }
}