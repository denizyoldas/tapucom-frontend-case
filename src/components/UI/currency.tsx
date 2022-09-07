import React from 'react'
import CurrFormat from 'react-currency-format'

interface Props {
  value: number
  [key: string]: any
}

const Currency = ({ value, ...props }: Props) => {
  return (
    <CurrFormat
      value={value}
      suffix=" TL"
      displayType="text"
      thousandSeparator={'.'}
      decimalSeparator={','}
      {...props}
    />
  )
}

export default Currency
