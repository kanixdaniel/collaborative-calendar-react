import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar";
import { uiSlice } from "./ui";

export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
    },
    // Evita la revisión de valores que no se puedes serializar (como fechas)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})