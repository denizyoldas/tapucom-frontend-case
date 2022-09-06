import React from 'react'

interface Input {
  label?: string
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, type, placeholder, value, onChange }: Input) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-b border-gray-300 pl-1 pr-2 pt-2 pb-2 focus:outline-none focus:border-active focus:border-b-2 transition-colors duration-200 ease-out mb-8"
      />
    </div>
  )
}

export default Input
