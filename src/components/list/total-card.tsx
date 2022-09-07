import { selectedCardItems } from '@/store/cardSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Currency from '../UI/currency'

const TotalCard = () => {
  const selectedProducts = useSelector(selectedCardItems)
  const total = selectedProducts.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  const tax = total * 0.1
  const totalWithTax = total + tax

  return (
    <div className="flex flex-col justify-center gap-4 h-[24vh] p-6">
      <h1 className="text-2xl font-bold">Ürünlerin Toplamı:</h1>
      <div>
        Toplam: <Currency value={total} />
      </div>
      <div>
        Vergiler + Kargo: <Currency value={tax} />
      </div>
      <div className="font-semibold text-lg">
        Genel Toplan <Currency value={totalWithTax} />
      </div>
    </div>
  )
}

export default TotalCard
