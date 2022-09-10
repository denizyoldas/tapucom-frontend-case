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
    <div className="mt-10">
      <div className="flex flex-col gap-3">
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
      <div className="absolute bottom-28 left-0 w-full px-8">
        <Button variant="outline" onClick={logOutHandler}>
          {t('text-logout')}
        </Button>
      </div>
    </div>
  )
}

export default Profile
