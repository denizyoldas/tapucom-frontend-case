// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { USERS } from '@/data/users'
import { IUser } from '@/types/common.model'
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
  const { email, password } = req.body

  const user = USERS.find(
    user => user.email === email && user.password === password
  )

  if (user) {
    res.status(200).json({ user, message: 'Success', success: true })
  } else {
    res.status(401).json({ message: 'Invalid credentials', success: false })
  }
}
