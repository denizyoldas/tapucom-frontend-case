import React, { useState } from 'react'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import Select from '@/components/UI/select'
import { useDispatch } from 'react-redux'
import { setAuthState } from '@/store/authSlice'

const SignUp = () => {
  const [formValid, setFormValid] = useState(false)
  const dispatch = useDispatch()

  const signUpHandler = () => {
    dispatch(setAuthState(true))
  }

  return (
    <>
      <Input
        type="email"
        placeholder="E-mail"
        onChange={() => setFormValid(true)}
      />
      <Input type="password" placeholder="Password" />
      <Select />
      <Button disabled={!formValid} onClick={signUpHandler}>
        Sign Up
      </Button>
    </>
  )
}

export default SignUp
