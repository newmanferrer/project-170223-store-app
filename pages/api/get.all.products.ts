import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib'
import { IProduct } from '@/models'

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
  } catch (error: any) {
    res.status(500).json(error)
  }
}
