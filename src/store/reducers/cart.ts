import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Restaurante } from '../../pages/Home'

type MenuItem = Restaurante['cardapio'][0]

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
