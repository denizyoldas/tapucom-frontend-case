import AccountLayout from '@/components/layout/account-layout'
import Input from '@/components/UI/input'
import Title from '@/components/UI/Title'
import React from 'react'

const Account = () => {
  return (
    <>
      <Title>Account</Title>
      <div>
        <Input />
        <Input />
        <Input />
      </div>
    </>
  )
}

Account.Layout = AccountLayout

export default Account
