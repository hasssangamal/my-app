import { createSlice } from '@reduxjs/toolkit'


const initialState = {
carts:localStorage.getItem('carts')?JSON.parse(localStorage.getItem('carts')):[],
cartsid:localStorage.getItem('cartsid')?JSON.parse(localStorage.getItem('cartsid')):[],
// carts:[],
// cartsid:[]
  
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state ,action) => {
      const x ={...action.payload,"qutity":1}
      state.carts.push(x)
      state.cartsid.push(action.payload.id);

    localStorage.setItem('carts' ,JSON.stringify(state.carts));
    localStorage.setItem('cartsid' ,JSON.stringify(state.cartsid));

      

    },
  increase:(state,action) => {
    const storage = state.carts.find((item) => {
      return item.id === action.payload
    })
    storage.qutity +=1
    localStorage.setItem('carts',JSON.stringify(state.carts))
  },
  decrease:(state,action) => {
    const storage = state.carts.find((item) => {
      return item.id === action.payload
    })
    storage.qutity -=1
    if(storage.qutity === 0){
      const arre = state.carts.filter(f=>{
        return f.id !== action.payload
      });
const arre2 =state.cartsid.filter((item) => {
  return item !==action.payload
})
      
state.cartsid =arre2;
      state.carts =arre;
      localStorage.setItem('cartsid',JSON.stringify(state.cartsid))
          }
          localStorage.setItem('carts',JSON.stringify(state.carts))
  },
  deleteitem:(state ,action) => {
    const arre = state.carts.filter(f=>{
      return f.id !== action.payload
    })
    const arre2 =state.cartsid.filter((item) => {
      return item !==action.payload
    })
          
    state.cartsid =arre2;
    state.carts =arre
    localStorage.setItem('cartsid',JSON.stringify(state.cartsid))
    localStorage.setItem('carts',JSON.stringify(state.carts))
  }
  

  }
  
  
}
)

// Action creators are generated for each case reducer function
export const { addtocart ,increase ,decrease ,deleteitem} = counterSlice.actions

export default counterSlice.reducer