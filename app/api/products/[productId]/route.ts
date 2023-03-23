import { NextRequest, NextResponse } from 'next/server'
import { getProductById } from '@/lib'

interface IProps {
  params: {
    productId: string
  }
}

//* =====================================================================================
//* Generate static HTML (Static Route Handlers) - OK
//* =====================================================================================
//* Route Handlers are statically evaluated by default when using the GET method
//* with the Response object.
//* It is equivalent to the old "getStaticProps()" in Nextjs 12
//* It is equivalent to put the parameter: "{ cache: 'force-cache' }" in Nextjs 13.0
//* =====================================================================================
export async function GET(response: NextRequest, { params }: IProps) {
  const productId = params.productId

  try {
    const { product, CustomError } = await getProductById(productId)
    if (CustomError) throw new Error(JSON.stringify(CustomError))
    return NextResponse.json({ product }, { status: 200, statusText: 'GET OK' })
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
        statusText: 'GET ERROR: Internal Server Error'
      }
    )
  }
}
//* =====================================================================================
