// src/features/event/eventSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: {
      reducer: (state, action) => {
        state.events.push(action.payload);
      },
      prepare: (title, date) => {
        return {
          payload: {
            id: nanoid(),
            title,
            date,
          },
        };
      },
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
