import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import cx from 'classnames'

const HeaderItem = ({ text, herf }: { text: string; herf: string }) => {
  const router = useRouter()
  const isActive = router.pathname === herf
  return (
    <li
      className={cx('hover:text-primary hover:underline', {
        'text-primary underline': isActive
      })}
    >
      <Link href={herf}>{text}</Link>
    </li>
  )
}

const Header = () => {
  const { t } = useTranslation('common')
  return (
    <header>
      <nav className="hidden md:flex sticky w-full px-2 py-4 items-center justify-center">
        <ul className="flex gap-4">
          <HeaderItem text={t('header-text-list')} herf="/list" />
          <HeaderItem text={t('header-text-account')} herf="/account" />
        </ul>
      </nav>
    </header>
  )
}

export default Header
