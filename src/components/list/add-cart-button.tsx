import React from 'react'
import cx from 'classnames'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'

interface Props {
  isAdded: boolean
  onClick: () => void
}

const AddCartButton = ({ isAdded, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'tracking-wider flex flex-row items-center justify-center  font-light text-sm'
      )}
    >
      {isAdded ? (
        <span className="text-danger flex">
          <IoIosRemoveCircleOutline size={20} className="mr-2" />
          Sepetten Çıkar
        </span>
      ) : (
        <span className="text-tertiary flex">
          <IoIosAddCircleOutline size={20} className="mr-2" />
          Sepete Ekle
        </span>
      )}
    </button>
  )
}

export default AddCartButton
