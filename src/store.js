import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slice/ProductsSlice'

export const store = configureStore({
  reducer: {
    product : ProductSlice,
  },
})