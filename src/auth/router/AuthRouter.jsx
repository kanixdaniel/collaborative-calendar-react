import { Navigate, Route, Routes } from "react-router"
import { Login, Register } from "../"

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
