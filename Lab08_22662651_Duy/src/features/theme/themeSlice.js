import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Giá trị mặc định
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action để thay đổi theme
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

// Xuất action và reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
