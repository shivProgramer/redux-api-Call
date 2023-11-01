import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action
export const getAllData = createAsyncThunk(
  "gitUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://api.github.com/users");
    try {
      const result = response.json();
      return result;
    } catch (error) {
      return rejectWithValue("oops foun an error");
    }
  }
);

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default gitUser.reducer;
