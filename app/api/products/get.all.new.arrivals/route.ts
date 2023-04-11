import { NextRequest, NextResponse } from 'next/server'
import { getProductsByTag } from '@/lib'

//* =====================================================================================
//* Generate static HTML (Static Route Handlers) - OK
//* =====================================================================================
//* Route Handlers are statically evaluated by default when using the GET method
//* with the Response object.
//* It is equivalent to the old "getStaticProps()" in Nextjs 12
//* It is equivalent to put the parameter: "{ cache: 'force-cache' }" in Nextjs 13.0
//* =====================================================================================
export async function GET(request: NextRequest) {
  try {
    const { products, CustomError } = await getProductsByTag('new arrivals')
    if (CustomError) throw new Error(JSON.stringify(CustomError))
    return NextResponse.json({ products }, { status: 200, statusText: 'GET OK' })
  } catch (CustomError) {
    return NextResponse.json(
      { CustomError },
      { status: 500, statusText: 'GET ERROR: Internal Server Error' }
    )
  }
}
//* =====================================================================================
