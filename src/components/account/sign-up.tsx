import React from 'react'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import Select from '@/components/UI/select'
import { useDispatch } from 'react-redux'
import { setAuthState, setAuthUser } from '@/store/authSlice'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IRegisterForm {
  email: string
  password: string
  locale: string
}

const SignUp = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<IRegisterForm>({
    mode: 'onChange'
  })

  const registerRequest = async (payload: IRegisterForm) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()

    if (data.success) {
      toast.success(t('text-login-success'))
      dispatch(setAuthState(true))
      dispatch(setAuthUser(data.user))
    } else {
      toast.error(data.message)
    }
  }

  const signUpHandler: SubmitHandler<IRegisterForm> = data => {
    registerRequest(data)
  }

  return (
    <form onSubmit={handleSubmit(signUpHandler)}>
      <Input
        type="email"
        placeholder="E-mail"
        {...register('email', {
          required: true,
          pattern: /^\S+@\S+$/i,
          maxLength: 50
        })}
      />
      {/* {errors.email && (
        <span className="pb-2 text-red-500">{t('text-email-error')}</span>
      )} */}
      <Input
        type="password"
        placeholder={t('text-password')}
        {...register('password', { required: true, minLength: 6 })}
      />
      {/* {errors.password && (
        <span className="pb-2 text-red-500">{t('text-password-error')}</span>
      )} */}
      <label>{t('text-locale')}</label>
      <Select {...register('locale')} />
      <Button disabled={!isValid} type="submit" variant="primary">
        {t('text-sign-up')}
      </Button>
    </form>
  )
}

export default SignUp
