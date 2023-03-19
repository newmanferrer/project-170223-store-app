import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { getProductById } from '@/lib'

interface IProps {
  params: {
    productId: string
  }
}

//* Generate static HTML (Static Route Handlers)
export async function GET(request: NextRequest, { params }: IProps) {
  const productId = params.productId

  try {
    const { product, ErrorMessage } = await getProductById(productId)
    if (ErrorMessage) throw new Error(ErrorMessage)
    return NextResponse.json(product, { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
