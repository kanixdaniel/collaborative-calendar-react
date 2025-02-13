import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => event._id !== payload._id ? event : payload);
            state.activeEvent = null;
        },
        onDeleteEvent: (state) => {
            state.events = state.events.filter(event => event._id !== state.activeEvent._id);
            state.activeEvent = null;
        },
    }
});

export const {
    onSetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
} = calendarSlice.actions;