import Profile from '@/components/account/profile'
import SignUp from '@/components/account/sign-up'
import Title from '@/components/UI/title'
import { selectAuthState } from '@/store/authSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Account = () => {
  const authState = useSelector(selectAuthState)
  const { t } = useTranslation('common')

  return (
    <div className="mt-20 px-6 h-screen md:w-[50%] md:mx-auto">
      <Title className="mb-8">{t('account')}</Title>
      {authState ? <Profile /> : <SignUp />}
    </div>
  )
}

export default Account

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['tr', 'en']))
      // Will be passed to the page component as props
    }
  }
}
