import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'addWish',
  initialState : {
    value: []
  },
  reducers: {
    addtowish: (state,action) => {
       state.value.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtowish } = wishSlice.actions

export default wishSlice.reducer