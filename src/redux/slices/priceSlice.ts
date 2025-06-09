// store/priceSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface PriceState {
    price: string | null;
    percent: string | null;
    isPositive: boolean;
    ticker: any;
    loading: boolean;
    error: string | null;
}

const initialState: PriceState = {
    price: null,
    percent: null,
    isPositive: true,
    ticker: null,
    loading: false,
    error: null,
};

// Async thunk for REST API fallback
export const fetchPriceFromAPI = createAsyncThunk(
    "price/fetchPriceFromAPI",
    async (symbol: string, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
            );

            console.log(
                "65656646"
                , res.data)
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        updateFromWebSocket: (state, action) => {
            const data = action.payload;
            const currentPrice = parseFloat(data.c);
            const priceChangePercent = parseFloat(data.P);

            state.price = currentPrice.toLocaleString();
            state.percent = priceChangePercent.toFixed(2);
            state.isPositive = priceChangePercent >= 0;
            state.ticker = data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPriceFromAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPriceFromAPI.fulfilled, (state, action) => {
                const data = action.payload;
                const currentPrice = parseFloat(data.lastPrice);
                const priceChangePercent = parseFloat(data.priceChangePercent);

                state.price = currentPrice.toLocaleString();
                state.percent = priceChangePercent.toFixed(2);
                state.isPositive = priceChangePercent >= 0;
                state.ticker = data;
                state.loading = false;
            })
            .addCase(fetchPriceFromAPI.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

export const { updateFromWebSocket } = priceSlice.actions;
export default priceSlice.reducer;
