import React from 'react'
import cx from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: Props) => {
  return <h1 className={cx('text-4xl', className)}>{children}</h1>
}

export default Title
