import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

interface Props {
  name: string
  icon: React.ReactNode
  path: string
  isActive: boolean
}

const BottomNavItem = ({ name, icon, path, isActive }: Props) => {
  return (
    <Link href={path}>
      <div
        className={cx(
          'px-4 py-2 flex flex-col h-20 items-center justify-center',
          {
            'text-primary': isActive
          }
        )}
      >
        {icon}
        {name}
      </div>
    </Link>
  )
}

export default BottomNavItem
