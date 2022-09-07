import { Role } from './../types/enum'
import { Language } from '@/types/enum'
import { nanoid } from 'nanoid'

export const USERS = [
  {
    id: nanoid(),
    name: 'Deniz Aksu',
    email: 'deniz@tapu.com',
    password: '123456',
    role: Role.User,
    language: Language.Turkish
  }
]
