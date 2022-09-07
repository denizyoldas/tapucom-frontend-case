import { selectedCardItems } from '@/store/cardSlice'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import Currency from '../UI/currency'

const TotalCard = () => {
  const { t } = useTranslation('common')
  const selectedProducts = useSelector(selectedCardItems)
  const total = selectedProducts.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  const tax = total * 0.1
  const totalWithTax = total + tax

  return (
    <div className="basic-1/2 my-6 px-6">
      <h1 className="text-2xl font-bold pb-2">{t('total-products')}:</h1>
      <div className="pb-1">
        {t('text-total')}: <Currency value={total} />
      </div>
      <div className="pb-1">
        {t('text-tax-and-cargo')}: <Currency value={tax} />
      </div>
      <div className="font-semibold text-lg ">
        {t('text-total-with-tax')}: <Currency value={totalWithTax} />
      </div>
    </div>
  )
}

export default TotalCard
