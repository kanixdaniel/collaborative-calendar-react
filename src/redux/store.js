import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar";
import { uiSlice } from "./ui";
import { authSlice } from "./auth";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
    },
    // Evita la revisión de valores que no se puedes serializar (como fechas)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})