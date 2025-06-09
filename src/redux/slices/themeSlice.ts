import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// const initialState = {
//   theme: getInitialTheme(),
// };
const initialState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
