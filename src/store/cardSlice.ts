import { HYDRATE } from 'next-redux-wrapper'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/types/common.model'
import { AppState } from '.'
import { nanoid } from 'nanoid'

const PRODUCTS = [
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: '/images/product.png',
    rating: 5.0,
    price: 10_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: '/images/product.png',
    rating: 3.0,
    price: 20_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: '/images/product.png',
    rating: 1.0,
    price: 2_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: '/images/product.png',
    rating: 2.0,
    price: 24_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: '/images/product.png',
    rating: 5.0,
    price: 28_000,
    distance: 3,
    isAdded: false
  }
]

export interface CardSlice {
  items: IProduct[]
  quantity: number
  total: number
}

export const initialState: CardSlice = {
  items: PRODUCTS,
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

export const { addCardItem, removeCardItem } = cardSlice.actions

export const selectCardItems = (state: AppState) => state.card.items
export const selectedCardItems = (state: AppState) =>
  state.card.items.filter(item => item.isAdded)

export default cardSlice.reducer
