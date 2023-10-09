import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'
const initialState = {
productsx:[],isloading:false,Error:null,j:[]
}
 export const as = createAsyncThunk(
  'product/as',
  () => {
    return axios.get('https://store-40be.onrender.com/products')
  }
)
export const prouctsslice = createSlice({
  name: 'product',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(as.fulfilled, (state, action) => {
      state.isloading=false
      state.productsx=action.payload
    })
    builder.addCase(as.pending, (state) => {
      
      state.isloading=true
    })

  
  },



})



export default prouctsslice.reducer