import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import react from 'react'

const Home = () => {
  return (
    <div className="mt-10 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Tapu.com</h1>
      <p className="text-center pt-10">
        Tapu - Arsa - Arazi alıp satım yapabileceğiniz online bir müzayede
        platformudur.
      </p>
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['tr', 'en']))
      // Will be passed to the page component as props
    }
  }
}
