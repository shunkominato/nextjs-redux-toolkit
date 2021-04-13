import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noki: '1',
  includeNum: '1'
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setNoki: (state, action) => {
      console.log(state)
      state.noki = action.payload
    },
    setIncludeNum: (state, action) => {
      console.log(state)
      state.includeNum = action.payload
    }
  }
})

export const productActions = productSlice.actions

export default productSlice.reducer