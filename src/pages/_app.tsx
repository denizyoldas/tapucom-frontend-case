import BottomNav from '@/components/bottom-nav'
import { appWithTranslation } from 'next-i18next'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store'
import Head from 'next/head'

const Noop: React.FC = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head>
        <title>Tapu.com</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <BottomNav />
    </>
  )
}

export default appWithTranslation(wrapper.withRedux(MyApp))
