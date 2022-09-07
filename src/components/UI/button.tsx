import React from 'react'
import cx from 'classnames'

interface Props {
  variant?: 'primary' | 'outline' | 'text'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  {
    type = 'button',
    variant = 'primary',
    className = 'primary',
    disabled = false,
    onClick,
    children
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cx(
        'px-6 py-2 rounded-xl bg-primary text-white w-full h-14 font-medium tracking-wider',
        className,
        {
          'bg-gray-400 cursor-not-allowed': disabled,
          'bg-transparent !text-primary border border-primary':
            variant === 'outline'
        }
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
})

// const Button = ({
//   type = 'button',
//   variant = 'primary',
//   className = 'primary',
//   disabled = false,
//   onClick,
//   children
// }: Props) => {
//   return (
//     <button
//       className={cx(
//         'px-6 py-2 rounded-xl bg-primary text-white w-full h-14 font-medium tracking-wider',
//         className,
//         {
//           'bg-gray-400 cursor-not-allowed': disabled,
//           'bg-transparent !text-primary border border-primary':
//             variant === 'outline'
//         }
//       )}
//       onClick={disabled ? undefined : onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   )
// }

export default Button
