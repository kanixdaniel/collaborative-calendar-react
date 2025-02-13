import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onCheckingStatus, onClearErrorMessage, onLogin, onLogout } from "../redux/auth";

export const useAuthStore = () => {
    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector(state => state.auth);

    const startLogin = async (body) => {
        dispatch(onClearErrorMessage());
        dispatch(onCheckingStatus());
        try {
            const { data } = await calendarApi.post('/v1/auth/login', body);
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

    const startRegister = async (body) => {
        dispatch(onClearErrorMessage());
        dispatch(onCheckingStatus());
        try {
            const { data } = await calendarApi.post('/v1/auth/register', body);
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

    const startCheckAuthToken = async () => {
        const token = sessionStorage.getItem('token');
        if(!token) return dispatch(onLogout());

        try {
            const { data } = await calendarApi.get('/v1/auth/renew-token');
            const { token, fullName, uid } = data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onClearErrorMessage());
            dispatch(onLogin({ fullName, uid }));
        } catch (error) {
            sessionStorage.clear();
            console.error(error);
            dispatch(onLogout(error.response.data.message));
            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    const startLogout = () => {
        sessionStorage.clear();
        dispatch(onLogout());
    }

    return {
        // Properties
        errorMessage,
        status,
        user,
        // Methods
        startCheckAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }
}