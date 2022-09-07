import React from 'react'
import Image from 'next/image'
import Star from '../UI/star'
import { FaMapMarkerAlt } from 'react-icons/fa'
import AddCartButton from './add-cart-button'
import { useDispatch } from 'react-redux'
import { addCardItem, removeCardItem } from '@/store/cardSlice'
import Currency from '../UI/currency'
import { useTranslation } from 'next-i18next'

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
  const { t } = useTranslation('common')

  const addCardHandler = () => {
    dispatch(isAdded ? removeCardItem(id) : addCardItem(id))
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full border-b py-4 border-[#F1F3F5] snap-center">
      <div className="flex flex-row items-center justify-start w-full">
        <div className="drop-shadow-image">
          <Image
            width={100}
            height={100}
            src={image}
            alt="image"
            className="w-28 h-28 rounded-xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-4">
          <h3 className="text-lg font-medium pb-2">{name}</h3>
          <div className="text-gray-400 text-sm font-light pb-1">
            {description}
          </div>
          <div className="flex  items-center justify-center gap-8 pb-1">
            <div className="flex items-center justify-center">
              <Star rate={rating} />
              <span className="text-sm">{rating}.0</span>
            </div>
            <div className="flex">
              <FaMapMarkerAlt color="#0DAFC0" size={15} />
              <span className="ml-1 text-sm">{distance} km</span>
            </div>
          </div>
          <div>
            <span className="text-xs">
              {t('text-price')}: <Currency value={price} />
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
