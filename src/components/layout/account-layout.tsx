import React from 'react'

interface Props {
  children: React.ReactNode
}

const AccountLayout = ({ children }: Props) => {
  return <div className="mt-20 px-10 h-screen">{children}</div>
}

export default AccountLayout
