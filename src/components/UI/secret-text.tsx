import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

interface Props {
  text: string
}

const SecretText = ({ text }: Props) => {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <span>{show ? text : '********'}</span>
      <button
        className="ml-2"
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </>
  )
}

export default SecretText
