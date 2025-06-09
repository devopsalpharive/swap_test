import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import consts from "../../constant";
import axios from "axios";

interface AuthState {
    auth: any | null;
    isLoading: boolean;
    error: string | null;
    user: any | null; // Added user property
    isAuthenticated?: boolean; // Added isAuthenticated property,
    userToken: string | null
}

interface verifyData {
    email: string | null;
    otp: string;
}

interface changePass {
    email: string | null;
    oldPassword: string | null;
    newPassword: string | null;
}

// interface imageData {
//     image: File | null;
// }

// interface FormData {
//     name: string | null;
//     phone: string | null;
//     address: string | null;
//     // city: string | null;
//     state: string | null;
//     country: string | null;
//     zipCode: string | null;
// }

interface forgot {
    email: string
}
interface forgotPass {
    email: string,
    otp: number,
    newPassword: string,
    confirmPassword: string
}

const url = `${consts.BackendUrl}`


export const registerUser = createAsyncThunk("auth/register", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/register`, formData);

        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Register User");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || "Registration failed!");
        }
        return rejectWithValue("An unknown error occurred during registration!");
    }
});

export const loginUser = createAsyncThunk("auth/login", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/login`, formData);

        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Login User");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || "Login failed!");
        }
        return rejectWithValue("An unknown error occurred during login!");
    }
});

export const verifyUser = createAsyncThunk("auth/verify", async (payload: verifyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/verify`, payload);

        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Verify User");
        }

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || "Verification failed!");
        }
        return rejectWithValue("An unknown error occurred during verification!");
    }
});


export const changeUserPassword = createAsyncThunk("auth/changePassword", async (payload: changePass, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/updatepassword`, payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("alphaswap")}`,
            },
        });
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Change Password");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Change password failed!");
        }
        return rejectWithValue("An unknown error occurred during change password!");
    }
});



export const getUserProfile = createAsyncThunk("auth/getUserDetails", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${url}/getuserprofile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("alphaswap")}`,
            },
        });
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Get User Profile");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Get User Details failed!");
        }
        return rejectWithValue("An unknown error occurred during Get User Details!");
    }
});


//  Image upload for user 

export const uploadImage = createAsyncThunk(
    "auth/uploadImage",
    async (file: any, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("image", file);
            const response = await axios.post(`${url}/imageUpload`, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('alphaswap')}`,
                },
            });
            return response?.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data?.message || " Image Failed to Upload!");
            }
            return rejectWithValue(" Image Failed to Upload!");
        }
    }
);



export const updateUserProfile = createAsyncThunk("auth/updateUser", async (payload: any, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/updateuserprofile`, payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("alphaswap")}`,
            },
        });
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Update User Profile");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Failed to Update User Profile!");
        }
        return rejectWithValue("An unknown error occurred during Update User Profile!");
    }
});


export const forgotPassword = createAsyncThunk("auth/forgotpassword", async (payload: forgot, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/forgotpassword`, payload);
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Otp send ");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Email Otp send failed!");
        }
        return rejectWithValue("An unknown error occurred during Otp send failed!");
    }
});


export const forgotPasswordChange = createAsyncThunk("auth/forgotpasswordChange", async (payload: forgotPass, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/forgotpasswordchanged`, payload);
        if (!response?.data?.success) {
            return rejectWithValue(response?.data?.message || "Failed To Change Password");
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data?.message || " Change password failed!");
        }
        return rejectWithValue("An unknown error occurred during change password!");
    }
});






const initialState: AuthState = {
    auth: null,
    isLoading: false,
    error: null,
    user: null,
    userToken: null,
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },

    extraReducers(builder) {
        builder
            .addCase(registerUser.pending, (state) => { state.isLoading = true; })
            .addCase(registerUser.fulfilled, (state) => { state.isLoading = false; })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string | null;
            })
            .addCase(loginUser.pending, (state) => { state.isLoading = true; })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.auth || null;
                state.isAuthenticated = action.payload.success;
                state.userToken = action.payload.token || null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string | null;
            })

            .addCase(getUserProfile.pending, (state) => { state.isLoading = true; })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload || null;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string | null;
            })
    },


});


export default userSlice.reducer;
