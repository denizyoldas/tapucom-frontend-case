import { Language } from './enum'

export interface ISelectOption {
  label: string
  value: string
}

export interface IProduct {
  id: string
  name: string
  description: string
  image: string
  rating: number
  price: number
  distance: number
  isAdded: boolean
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  role: string
  language: Language
}
