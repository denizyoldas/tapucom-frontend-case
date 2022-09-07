import React, { useState } from 'react'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import Select from '@/components/UI/select'
import { useDispatch } from 'react-redux'
import { setAuthState, setAuthUser } from '@/store/authSlice'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

const SignUp = () => {
  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Enter correct email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      errorMessage: 'Enter correct password',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  })
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const loginRequest = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'deniz@tapu.com',
        password: '123456'
      })
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

  const signUpHandler = (event: any) => {
    event.preventDefault()
    console.log(event.target)
    // dispatch(setAuthState(true))
    loginRequest()
  }

  return (
    <form onSubmit={signUpHandler}>
      <Input
        type="email"
        placeholder="E-mail"
        onChange={() => setFormValid(true)}
        name="email"
      />
      <Input type="password" placeholder={t('text-password')} name="password" />
      <Select />
      <Button disabled={!formValid} type="submit" variant="primary">
        {t('text-sign-up')}
      </Button>
    </form>
  )
}

export default SignUp
