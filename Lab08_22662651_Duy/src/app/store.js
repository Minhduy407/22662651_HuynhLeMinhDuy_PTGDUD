import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../CounterSlide';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
