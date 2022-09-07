import React from 'react'

interface Props {
  rate: number
}

const Star = ({ rate }: Props) => {
  return (
    <div className="w-6 h-6">
      <svg
        id="eGbOUuVyQpY1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 10 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <g>
          <path
            d="M150,52.34406l11.97051,24.25491h-23.94103L150,52.34406Z"
            transform="translate(.000009 22.505577)"
            fill={rate >= 5 ? '#FFC107' : '#E0E0E0'}
            strokeWidth="0"
          />
          <path
            d="M125.80245,101.37365l12.22704-24.77468h23.94103l12.22704,24.77468h-48.39511Z"
            transform="translate(-.000005 22.505577)"
            fill={rate >= 4 ? '#FFC107' : '#E0E0E0'}
            strokeWidth="0"
          />
          <path
            d="M175.99861,105.023l58.13466,8.44746-23.80956,23.20858h-120.64744L65.86671,113.47046l58.13466-8.44746l1.80106-3.64935h48.3951l1.80108,3.64935Z"
            transform="translate(.00001 22.505577)"
            fill={rate >= 3 ? '#FFC107' : '#E0E0E0'}
            strokeWidth="0"
          />
          <path
            d="M192.06664,154.4753l2.868,16.72173h-89.86928l2.868-16.72173-18.25708-17.79626h120.64744L192.06664,154.4753Z"
            transform="translate(.000004 22.505577)"
            fill={rate >= 2 ? '#FFC107' : '#E0E0E0'}
            strokeWidth="0"
          />
          <path
            d="M201.99722,212.37506L150,185.0385L98.00278,212.37506l7.06259-41.17803h89.86928l7.06257,41.17803Z"
            transform="translate(.000004 22.505577)"
            fill={rate >= 1 ? '#FFC107' : '#E0E0E0'}
            strokeWidth="0"
          />
        </g>
      </svg>
    </div>
  )
}

export default Star
