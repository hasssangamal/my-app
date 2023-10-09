import { configureStore } from '@reduxjs/toolkit'
import prouctsslice from './prouctsslice'
import cartslic from './cartslic'
import datailsslice from './datailsslice'
export const store = configureStore({
  reducer: {
    product:prouctsslice,
    cart:cartslic,
    productde:datailsslice,
  },
})