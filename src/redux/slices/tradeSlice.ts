import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import consts from "../../constant";
import axios from "axios";

interface AuthState {
    pairs: any | null;
    isLoading: boolean;
    error: string | null;

}




const url = `${consts.BackendUrl}`


export const getPairList = createAsyncThunk("auth/getUserDetails", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${url}/binance/getpairs`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("alphaswap")}`,
            },
        });
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Get Pair List");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Failed To Get Pair List");
        }
        return rejectWithValue("An unknown error occurred during Get Pair List!");
    }
});


const initialState: AuthState = {
    pairs: null,
    isLoading: false,
    error: null,
};

const pairSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },

    extraReducers(builder) {
        builder
            .addCase(getPairList.pending, (state) => { state.isLoading = true; })

            .addCase(getPairList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.pairs = action.payload || null;
            })
            .addCase(getPairList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string | null;
            })
    },
});


export default pairSlice.reducer;
