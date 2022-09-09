import React from 'react'
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

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <ClipLoader loading />
      </div>
      // <div className="flex flex-col items-center justify-center w-full h-full px-6">
      //   <h1 className="text-2xl font-light">{t('text-no-products-on-list')}</h1>
      // </div>
    )
  }

  return (
    <div
      className="pt-6 h-full flex flex-col md:w-[50%] md:mx-auto"
      // style={{ display: 'grid', gridTemplateRows: 'auto 30%' }}
    >
      <div className="overflow-y-auto px-6 scroll-smooth snap-y basic-1/2 h-[calc(100vh-290px)]">
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
