import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsData {
  slippage: string;
  slippage2: string;
  deadline: string;       // value in minutes as a string
  deadlineTime?: string;  // computed future time (e.g., ISO string)
}

interface SettingState {
  isOpen: boolean;
  data: SettingsData;
}

const initialState: SettingState = {
  isOpen: false,
  data: {
    slippage: "",
    slippage2: "",
    deadline: "",         // This will store minutes as string (e.g., "30" for 30 minutes)
    deadlineTime: "",     // This will be computed
  },
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openSetting: (state) => {
      state.isOpen = true;
    },
    closeSetting: (state) => {
      state.isOpen = false;
    },
    toggleSetting: (state) => {
      state.isOpen = !state.isOpen;
    },
    updateSettingsData: (
      state,
      action: PayloadAction<Partial<SettingsData>>
    ) => {
      const { deadline, ...rest } = action.payload;

      // Update all other settings
      state.data = { ...state.data, ...rest };

      // Special handling for deadline (minutes)
      if (deadline !== undefined) {
        state.data.deadline = deadline;
        
        // Convert minutes string to number
        const minutes = parseFloat(deadline);
        
        // Only calculate if we got a valid positive number
        if (!isNaN(minutes) && minutes > 0) {
          const deadlineDate = new Date();
          deadlineDate.setTime(deadlineDate.getTime() + minutes * 60 * 1000);
          state.data.deadlineTime = deadlineDate.toISOString();
        } else {
          state.data.deadlineTime = "";
        }
      }
    },
  },
});

export const { openSetting, closeSetting, toggleSetting, updateSettingsData } = popupSlice.actions;
export default popupSlice.reducer;