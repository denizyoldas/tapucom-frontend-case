import React from 'react'
import cx from 'classnames'
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io'
import { useTranslation } from 'next-i18next'

interface Props {
  isAdded: boolean
  onClick: () => void
}

const AddCartButton = ({ isAdded, onClick }: Props) => {
  const { t } = useTranslation('common')
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
          {t('text-remove-from-cart')}
        </span>
      ) : (
        <span className="text-tertiary flex">
          <IoIosAddCircleOutline size={20} className="mr-2" />
          {t('text-add-to-cart')}
        </span>
      )}
    </button>
  )
}

export default AddCartButton
