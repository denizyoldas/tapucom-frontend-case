import React from 'react'

interface Input {
  label?: string
  type?: string
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
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  )
}

export default Input
