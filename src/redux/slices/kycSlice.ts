import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import consts from "../../constant";

const url = `${consts.BackendUrl}`;

export const createKyc = createAsyncThunk(
    "kyc/createKyc",
    async (formData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/createKyc`, formData, {
                // withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('alphaswap')}`
                }
            });
            return response?.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data?.message || "Kyc Created Failed!");
            }
            return rejectWithValue("An unexpected error occurred!");
        }
    }
);

export const getKycDetails = createAsyncThunk(
    "kyc/getuserkyc",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/getkyc`, {
                // withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('alphaswap')}`
                }
            });
            return response?.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data?.message || "Kyc get failed!");
            }
            return rejectWithValue("An unexpected error occurred!");
        }
    }
);

// export const uploadImage = createAsyncThunk(
//     "kyc/uploadImage",
//     async (file, { rejectWithValue }) => {
//         try {
//             const formData = new FormData();
//             formData.append("image", file);

//             const response = await axios.post(`${url}/imageUpload`, formData, {
//                 headers: {
//                     "Authorization": `Bearer ${localStorage.getItem('tajirex')}`
//                 },
//             });
//             return response?.data;
//         } catch (error) {
//             return rejectWithValue(error.response?.data?.message || "Image upload failed!");
//         }
//     }
// );

const kycSlice = createSlice({
    name: "kyc",
    initialState: {
        kyc: [],
        kycDetails: null,
        imageUrl: "",
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createKyc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createKyc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.kyc = action.payload;
            })
            .addCase(createKyc.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as any;
            })
            .addCase(getKycDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getKycDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.kycDetails = action.payload;
            })
            .addCase(getKycDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as any
            })
        // .addCase(uploadImage.pending, (state) => {
        //     state.isLoading = true;
        // })
        // .addCase(uploadImage.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.imageUrl = action.payload;
        // })
        // .addCase(uploadImage.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

export default kycSlice.reducer;