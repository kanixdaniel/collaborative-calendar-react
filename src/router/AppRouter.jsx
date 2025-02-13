import { Navigate, Route, Routes } from "react-router"
import { AuthRouter } from "../auth";
import { CalendarRouter } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const AppRouter = () => {
    const { status, startCheckAuthToken } = useAuthStore();

    useEffect(() => { startCheckAuthToken() }, [])

    if (status === 'checking') {
        return (
            <div className="d-flex justify-content-center vh-100">
                <div className="spinner-grow my-auto">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? <Route path="/auth/*" element={<AuthRouter />} />
                    : <Route path="/*" element={<CalendarRouter />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
