import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {   
      // state.cartItem = action.payload
      let findProduct = state.cartItem.findIndex((item)=>item.id = action.payload.id)
      console.log(findProduct);
      
      
      // if(findProduct !== 1){
      //   console.log('ami ager product');
      // }else{
      //   console.log('New product add');
      // }
      
    },
  },
})

export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer