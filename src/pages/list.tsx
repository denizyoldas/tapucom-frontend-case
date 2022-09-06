import ListItem from '@/components/list/list-item'
import TotalCard from '@/components/list/total-card'
import { selectCardItems } from '@/store/cardSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const ListPage = () => {
  const products = useSelector(selectCardItems)
  // const products: any[] = []

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-light">Listede ürün bulunmamaktadır.</h1>
      </div>
    )
  }

  return (
    <div className="py-6">
      <div className="overflow-y-auto h-[70vh] px-6 scroll-smooth">
        {products.map(product => (
          <ListItem {...product} key={product.id} />
        ))}
      </div>
      <TotalCard />
    </div>
  )
}

export default ListPage
