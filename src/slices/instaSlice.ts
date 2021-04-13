import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
// import axios from "axios";
import { RootState } from "../reducers";
import { asyncInstaThunk } from "./actionCreator";

const asyncInstaSlice = createSlice({
  name: "asyncInsta",
  initialState: {
    pending: false,
    USD: "0",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(asyncInstaThunk.pending, (state, action) => {
    //   if (!state.pending) {
    //     state.pending = true
    //     console.log(action);
    //   }
    // })
    builder.addCase(asyncInstaThunk.fulfilled, (state, action) => {
      console.log(state.USD);
      if (!state.pending) {
        // state.pending = true
        console.log(action.payload);
        state.USD = action.payload;
        state = {
          pending: true,
          USD: action.payload,
        };
      }
    });
    // builder.addCase(asyncInstaThunk.rejected, (state, action) => {
    //   if (!state.pending) {
    //     state.pending = true
    //     console.log(action);
    //   }
    // })
  },
});

const stateSelector = (state: RootState) => state.asyncInsta;

export const selectors = {
  instaSelector: createSelector(stateSelector, (state) => state.USD),
};

export const actions = {
  asyncInstaThunk,
};

export default asyncInstaSlice.reducer;
