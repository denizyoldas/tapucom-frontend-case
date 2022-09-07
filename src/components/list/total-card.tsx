import React from 'react'
import Currency from '../UI/currency'

const TotalCard = () => {
  return (
    <div className="flex flex-col justify-center gap-4 h-[24vh] p-6">
      <h1 className="text-2xl font-bold">Ürünlerin Toplamı:</h1>
      <div>
        Toplam: <Currency value={123123} />
      </div>
      <div className="font-semibold text-lg">
        Genel Toplan <Currency value={123123} />
      </div>
    </div>
  )
}

export default TotalCard
