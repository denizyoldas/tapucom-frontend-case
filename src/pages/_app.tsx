import BottomNav from '@/components/bottom-nav'
import '@styles/globals.css'
import type { AppProps } from 'next/app'

const Noop: React.FC = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <Layout>
      <Component {...pageProps} />
      <BottomNav />
    </Layout>
  )
}

export default MyApp
