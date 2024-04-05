import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../carts/CartSlice'
import wishReducer from '../carts/WishSlice'

export const store = configureStore({
  reducer: {
    addcart : cartReducer,
    addwish : wishReducer,
  },
})