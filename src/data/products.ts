import { nanoid } from 'nanoid'

export const PRODUCTS = [
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
    image: 'https://picsum.photos/200?key=1',
    rating: 3.0,
    price: 20_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: 'https://picsum.photos/200?key=3',
    rating: 1.0,
    price: 2_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: 'https://picsum.photos/200?key=2',
    rating: 2.0,
    price: 24_000,
    distance: 3,
    isAdded: false
  },
  {
    id: nanoid(),
    name: 'Villa Bosphorus',
    description: '2 Bedrooms, 1 Bathroom',
    image: 'https://picsum.photos/200?key=4',
    rating: 5.0,
    price: 28_000,
    distance: 3,
    isAdded: false
  }
]
