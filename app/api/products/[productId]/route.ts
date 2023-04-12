import { NextRequest, NextResponse } from 'next/server'
import { getProductById } from '@/lib'

interface IProps {
  params: {
    productId: string
  }
}

//* =====================================================================================
//* λ - Generate Server Side Renders (Dynamic Route Handlers) - OK
//* =====================================================================================
//* Route handlers are evaluated dynamically when:
//* Using the Request object with the GET method.
//* Using any of the other HTTP methods.
//* Using Dynamic Functions like cookies and headers.
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old "getServerSideProps()" in Nextjs 12
//* It is equivalent to put the parameter: "{ cache: 'no-store' }" in Nextjs 13.0
//* =====================================================================================
export async function GET(request: NextRequest, { params }: IProps) {
  const productId = params.productId

  try {
    const { product, CustomError } = await getProductById(productId)
    if (CustomError) throw new Error(JSON.stringify(CustomError))
    return NextResponse.json({ product }, { status: 200, statusText: 'GET OK' })
  } catch (CustomError) {
    return NextResponse.json(
      { CustomError },
      {
        status: 500,
        statusText: 'GET ERROR: Internal Server Error'
      }
    )
  }
}
//* =====================================================================================
