import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    balanceType: string;
    avalBalance: string;
}

const initialState: UserState = {
    balanceType: "",
    avalBalance: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getBalance: (state) => {
            return state;
        },
        setBalance: (state, action) => {
            state.avalBalance = action.payload.avalBalance;
            state.balanceType = action.payload.balanceType;
        },
    },
});

export const { getBalance, setBalance } = userSlice.actions;
export default userSlice.reducer;
