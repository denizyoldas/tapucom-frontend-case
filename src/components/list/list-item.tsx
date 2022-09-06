import React from 'react'
import Image from 'next/image'
import Star from '../UI/star'
import { FaMapMarkerAlt } from 'react-icons/fa'
import AddCartButton from './add-cart-button'
import { useDispatch } from 'react-redux'
import { addCardItem, removeCardItem } from '@/store/cardSlice'
import CurrFormat from 'react-currency-format'

interface Props {
  id: string
  name: string
  description: string
  image: string
  price: number
  rating: number
  distance: number
  isAdded?: boolean
}

const ListItem = ({
  id,
  name,
  description,
  image,
  price,
  rating,
  distance,
  isAdded
}: Props) => {
  const dispatch = useDispatch()

  const addCardHandler = () => {
    dispatch(isAdded ? removeCardItem(id) : addCardItem(id))
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full h-36 border-b border-[#F1F3F5]">
      <div className="flex flex-row items-center justify-start w-full">
        <Image
          width={100}
          height={100}
          src={image}
          alt="image"
          className="w-28 h-28 rounded-xl object-cover"
        />
        <div className="flex flex-col items-start justify-center ml-4">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="text-gray-400 text-sm">{description}</div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <Star rate={rating} />
              <span>{rating}.0</span>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt color="#0DAFC0" />
              <span className="text-gray-400 ml-1">{distance} km</span>
            </div>
          </div>
          <div>
            <span className="font-light">
              Fiyat: <CurrFormat value={price} prefix="TL" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <AddCartButton isAdded={isAdded || false} onClick={addCardHandler} />
      </div>
    </div>
  )
}

export default ListItem
