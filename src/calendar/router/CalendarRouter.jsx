import { Navigate, Route, Routes } from "react-router"
import { Calendar } from ".."

export const CalendarRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
