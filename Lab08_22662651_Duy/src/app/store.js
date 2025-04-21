import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../CounterSlide';
import todoReducer from '../features/todo/todoSlice';
import themeReducer from '../features/theme/themeSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import counterAdvanceReducer from '../features/counter/counterSlice';
import bmiReducer from '../features/bmi/bmiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme : themeReducer,
    cart : cartReducer,
    auth : authReducer,
    user : userReducer,
    counteradvance : counterAdvanceReducer,
    bmi : bmiReducer,
  },
});
