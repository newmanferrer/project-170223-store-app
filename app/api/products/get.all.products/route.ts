import { NextResponse } from 'next/server'
import { prisma } from '@/lib'

//* Generate static HTML (Static Route Handlers)
export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products, { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(error, { status: 500, statusText: 'GET ERROR: Internal Server Error' })
  }
}
