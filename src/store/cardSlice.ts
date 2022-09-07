import { HYDRATE } from 'next-redux-wrapper'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/types/common.model'
import { AppState } from '.'
import { nanoid } from 'nanoid'

export interface CardSlice {
  items: IProduct[]
  quantity: number
  total: number
}

export const initialState: CardSlice = {
  items: [],
  quantity: 0,
  total: 0
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCardItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.quantity++
        state.total += item.price
        item.isAdded = true
      }
    },
    removeCardItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.quantity--
        state.total -= item.price
        item.isAdded = false
      }
    },
    initializeCard: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})

export const { addCardItem, removeCardItem, initializeCard } = cardSlice.actions

export const selectCardItems = (state: AppState) => state.card.items
export const selectedCardItems = (state: AppState) =>
  state.card.items.filter(item => item.isAdded)

export default cardSlice.reducer
