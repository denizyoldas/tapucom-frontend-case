import BottomNav from '@/components/bottom-nav'
import { appWithTranslation } from 'next-i18next'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store'

const Noop: React.FC = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <BottomNav />
    </>
  )
}

export default appWithTranslation(wrapper.withRedux(MyApp))
