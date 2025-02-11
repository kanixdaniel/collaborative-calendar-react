import { Navigate, Route, Routes } from "react-router"
import { AuthRouter } from "../auth";
import { CalendarRouter } from "../calendar";

export const AppRouter = () => {
    const authStatus = 'not-authenticated';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? <Route path="/auth/*" element={<AuthRouter />} />
                    : <Route path="/*" element={<CalendarRouter />} />
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
