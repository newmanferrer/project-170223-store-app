import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { prisma } from '@/lib'

interface IProps {
  params: {
    productId: string
  }
}

//* Generate static HTML (Static Route Handlers)
export async function GET(request: NextRequest, { params }: IProps) {
  const productId = params.productId

  console.log('Request: ', request)
  console.log('API Params: ', params)
  console.log('API Params Product ID: ', productId)

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: `${productId}`
      },
      include: {
        categories: true,
        tags: true
      }
    })
    return NextResponse.json(product, { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
