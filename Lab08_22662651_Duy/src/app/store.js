import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../CounterSlide';
import todoReducer from '../features/todo/todoSlice';
import themeReducer from '../features/theme/themeSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme : themeReducer,
    cart : cartReducer
  },
});
