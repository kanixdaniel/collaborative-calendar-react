import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            {
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
        action: (state, /* action */) => {

        },
    }
});

export const { action } = calendarSlice.actions;