import React, { useState } from 'react'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import Select from '@/components/UI/select'
import { useDispatch } from 'react-redux'
import { setAuthState, setAuthUser } from '@/store/authSlice'
import { toast } from 'react-toastify'

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

  const loginRequest = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'demo@demo.com',
        password: '123456'
      })
    })

    const data = await res.json()

    if (data.success) {
      toast.success('Login success')
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
      <Input type="password" placeholder="Password" name="password" />
      <Select />
      <Button disabled={!formValid} type="submit" variant="primary">
        Sign Up
      </Button>
    </form>
  )
}

export default SignUp
