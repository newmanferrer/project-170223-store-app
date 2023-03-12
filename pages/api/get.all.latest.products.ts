import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib'
import { IProduct } from '@/models'

export async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  try {
    const products = await prisma.product.findMany({
      where: {
        tags: {
          some: {
            name: {
              contains: 'latest'
            }
          }
        }
      }
    })
    res.status(200).json(products)
  } catch (error: any) {
    res.status(500).json(error)
  }
}
