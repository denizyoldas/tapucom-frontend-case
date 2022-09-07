import { useTranslation } from 'next-i18next'
import React from 'react'

const Header = () => {
  const { t } = useTranslation('common')
  return (
    <div className="hidden md:flex fixed w-full px-4 py-2">
      <div>list</div>
      <div>account</div>
    </div>
  )
}

export default Header
