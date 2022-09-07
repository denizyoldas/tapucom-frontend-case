import { Role } from './../../../types/enum'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { USERS } from '@/data/users'
import { IUser } from '@/types/common.model'
import { Language } from '@/types/enum'
import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  user?: IUser
  message: string
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password, language } = req.body
  const user = USERS.find(user => user.email === email)
  if (user) {
    res.status(400).json({
      message: 'User already exists',
      success: false
    })
  }
  const newUser = {
    id: nanoid(),
    name: 'John Doe',
    email,
    password,
    role: Role.User,
    language
  }
  USERS.push(newUser)
  res.status(200).json({
    user: newUser,
    message: 'User created successfully',
    success: true
  })
}
