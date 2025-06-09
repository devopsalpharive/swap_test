import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import themeReducer from "./slices/themeSlice"
import authReducer from "./slices/authSlice";
import pairReducer from "./slices/tradeSlice";
import kycReducer from "./slices/kycSlice";
import priceReducer from "./slices/priceSlice";
import popupReducer from "./slices/popupSlice";


export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer,
    auth: authReducer,
    pair: pairReducer,
    kyc: kycReducer,
    price: priceReducer,
    popup:popupReducer
  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
