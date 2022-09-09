import React from 'react'
import BottomNav from './bottom-nav'
import Header from './header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <BottomNav />
    </div>
  )
}

export default Layout
