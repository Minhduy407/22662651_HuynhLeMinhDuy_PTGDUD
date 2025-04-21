// src/features/bmi/bmiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: '',
  height: '',
  result: '',
  status: '',
};

const bmiSlice = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    calculateBMI: (state) => {
      const weight = parseFloat(state.weight);
      const height = parseFloat(state.height) / 100;

      if (isNaN(weight) || isNaN(height) || height === 0) {
        state.result = '';
        state.status = 'Dữ liệu không hợp lệ';
        return;
      }

      const bmi = weight / (height * height);
      state.result = bmi.toFixed(2);

      if (bmi < 18.5) state.status = 'Gầy';
      else if (bmi < 24.9) state.status = 'Bình thường';
      else if (bmi < 29.9) state.status = 'Thừa cân';
      else state.status = 'Béo phì';
    },
  },
});

export const { updateInput, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
