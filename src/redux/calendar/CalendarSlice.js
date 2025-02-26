import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: false,
        events: [],
        activeEvent: null,
    },
    reducers: {
        onSetLoadingEvents: (state, { payload }) => {
            state.isLoadingEvents = payload;
        },
        onSetEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            payload.forEach(dbEvent => {
                const exist = state.events.some(storeEvent => storeEvent.id === dbEvent.id);
                if(exist) return;
                state.events.push(dbEvent);
            });
        },
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.isLoadingEvents = false;
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.isLoadingEvents = false;
            state.events = state.events.map(event => event.id !== payload.id ? event : payload);
            state.activeEvent = null;
        },
        onDeleteEvent: (state) => {
            state.isLoadingEvents = false;
            state.events = state.events.filter(event => event.id !== state.activeEvent.id);
            state.activeEvent = null;
        },
        onClearCalendarState: (state) => {
            state.isLoadingEvents = false;
            state.events = [];
            state.activeEvent = null;
        }
    }
});

export const {
    onSetLoadingEvents,
    onSetEvents,
    onSetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
    onClearCalendarState
} = calendarSlice.actions;