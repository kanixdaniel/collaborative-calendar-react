import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            {
                _id: new Date().getTime(),
                title: 'Cumpleaños Rola',
                notes: 'El pastel',
                start: new Date(),
                end: addHours(new Date(), 2),
                bgColor: '#fafafa',
                user: {
                    _id: '123',
                    name: 'Daniel'
                }
            }
        ],
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
    }
});

export const {
    onSetActiveEvent,
    onAddNewEvent,
} = calendarSlice.actions;