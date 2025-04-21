
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlide';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
