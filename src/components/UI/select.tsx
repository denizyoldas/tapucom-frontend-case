import { siteSettings } from '@/settings/site.settings'
import { ISelectOption } from '@/types/common.model'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Props {
  options?: ISelectOption[]
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  isLanguage?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
  { options, label, placeholder, value, onChange, isLanguage = true }: Props,
  ref
) {
  const [items, setItems] = useState<ISelectOption[]>([])
  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    if (options) {
      setItems(options)
    } else {
      setItems(siteSettings.languages)
    }
  }, [options])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e)
    }

    if (isLanguage) {
      router.push(router.pathname, router.pathname, {
        locale: e.target.value
      })
    }
  }

  return (
    <div className="flex flex-col relative">
      {label && <label className="text-sm">{label}</label>}
      <select
        ref={ref}
        value={value ? value : locale}
        onChange={handleChange}
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
})

export default Select
