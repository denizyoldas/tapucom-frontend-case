import { siteSettings } from '@/store/site.settings'
import { ISelectOption } from '@/types/common.model'
import React, { useEffect, useState } from 'react'

interface Props {
  options?: ISelectOption[]
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ options, label, placeholder, value, onChange }: Props) => {
  const [items, setItems] = useState<ISelectOption[]>([])

  useEffect(() => {
    if (options) {
      setItems(options)
    } else {
      setItems(siteSettings.languages)
    }
  }, [options])

  return (
    <div className="flex flex-col relative">
      {label && <label className="text-sm">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="border-b border-gray-300 pl-1 pr-2 pt-2 pb-2 focus:outline-none focus:border-active focus:border-b-2 transition-colors duration-200 ease-out mb-8"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {items.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
