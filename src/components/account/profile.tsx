import React from 'react'
import Button from '../UI/button'
import Select from '../UI/select'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setAuthState } from '@/store/authSlice'
import SecretText from '../UI/secret-text'
import { useTranslation } from 'next-i18next'

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const { t } = useTranslation('common')

  const logOutHandler = () => {
    dispatch(setAuthState(false))
  }

  return (
    <>
      <div className="">
        <div>
          {t('text-name-surname')} {user.name}
        </div>
        <div>E-mail: {user.email}</div>
        <div>
          {t('text-password')}: <SecretText text={user.password} />
        </div>
        <div>
          {t('text-current-locale')}: {user.language}
        </div>
      </div>
      <div>
        <Select />
      </div>
      <div>
        <Button variant="outline" onClick={logOutHandler}>
          {t('text-logout')}
        </Button>
      </div>
    </>
  )
}

export default Profile
