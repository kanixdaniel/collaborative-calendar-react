import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onCheckingStatus, onClearErrorMessage, onLogin, onLogout } from "../redux/auth";

export const useAuthStore = () => {
    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector(state => state.auth);

    const startLogin = async (payload) => {
        dispatch(onClearErrorMessage());
        dispatch(onCheckingStatus());
        try {
            const { data } = await calendarApi.post('/v1/auth/login', payload);
            const { token, fullName, uid } = data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onClearErrorMessage());
            dispatch(onLogin({ fullName, uid }));
        } catch (error) {
            console.error(error);
            dispatch(onLogout(error.response.data.message));
            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    return {
        // Properties
        status,
        user,
        errorMessage,
        // Methods
        startLogin,
    }
}