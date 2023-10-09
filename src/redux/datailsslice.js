import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'
const initialState = {
  producdetails:[],isloading:false,Error:null
}
 export const details = createAsyncThunk(
  'productde/details',
  (id) => {
    return axios.get(`https://store-40be.onrender.com/products/${id}`)
  }
)
export const Cartsslice = createSlice({
  name: 'productde',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(details.fulfilled, (state, action) => {
      state.isloading=false
      state.producdetails = action.payload
    })
    builder.addCase(details.pending, (state) => {
      
      state.isloading=true
    })

  
  },



})



export default Cartsslice.reducer