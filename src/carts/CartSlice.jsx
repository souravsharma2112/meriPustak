import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'addcart',
  initialState : {
    value: []
  },
  reducers: {
    addtocart: (state,action) => {
       state.value.push(action.payload)
    }
  },
})


// Action creators are generated for each case reducer function
export const { addtocart , addtowish } = cartSlice.actions

export default cartSlice.reducer