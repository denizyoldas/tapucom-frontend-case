import { appWithTranslation } from 'next-i18next'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { initializeCard } from '@/store/cardSlice'
import { useEffect } from 'react'
// import Layout from '@/components/layout'
import Header from '@/components/header'
import BottomNav from '@/components/bottom-nav'

const Noop: React.FC = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const { data } = await res.json()
    dispatch(initializeCard(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Head>
        <title>Tapu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      <BottomNav />
    </>
  )
}

export default appWithTranslation(wrapper.withRedux(MyApp))
