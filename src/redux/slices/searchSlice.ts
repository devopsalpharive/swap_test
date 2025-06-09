import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  isOpen: boolean;
}

const initialState: SearchState = {
  isOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.isOpen = true;
    },
    closeSearch: (state) => {
      state.isOpen = false;
    },
    toggleSearch: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSearch, closeSearch, toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
