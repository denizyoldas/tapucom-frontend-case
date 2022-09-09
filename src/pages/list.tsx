import React, { useEffect, useState } from 'react'
import ListItem from '@/components/list/list-item'
import TotalCard from '@/components/list/total-card'
import { selectCardItems } from '@/store/cardSlice'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useSelector } from 'react-redux'
import ClipLoader from 'react-spinners/ClipLoader'

const ListPage = () => {
  const products = useSelector(selectCardItems)
  const { t } = useTranslation('common')
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    setInnerHeight(window.innerHeight)
  }, [])

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <ClipLoader loading />
      </div>
    )
  }

  return (
    <div
      className="pt-6 flex flex-col md:w-[50%] md:mx-auto"
      style={{
        height: innerHeight - 96
      }}
    >
      <div className="overflow-y-auto px-6 scroll-smooth snap-y basic-1/2">
        {products.map(product => (
          <ListItem {...product} key={product.id} />
        ))}
      </div>
      <TotalCard />
    </div>
  )
}

export default ListPage

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['tr', 'en']))
      // Will be passed to the page component as props
    }
  }
}
