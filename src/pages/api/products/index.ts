// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PRODUCTS } from '@/data/products'
import { IProduct } from '@/types/common.model'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data?: IProduct[]
  message: string
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: PRODUCTS,
    message: 'Products fetched successfully',
    success: true
  })
}
