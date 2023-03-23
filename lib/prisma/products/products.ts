import { prisma } from '@/lib'

type prismaError =
  | any
  | unknown
  | {
      route: string
      function: string
      message: string
      code?: string
      errorCode?: string
      name?: string
      meta?: string
      clientVersion?: string
    }

//* =====================================================================================
//* 1.- GET ALL PRODUCTS - OK
//* =====================================================================================
export async function getProducts() {
  try {
    const products = await prisma.product.findMany({ include: { categories: true, tags: true } })
    if (products.length === 0) throw new Error(`Products were not found`)
    return { products }
  } catch (error: prismaError) {
    console.error('Error: lib/prisma/products/products.ts -> "getProducts"')
    console.error('Error Message: ', error.message)
    console.error('Prisma Error: ', error)

    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProducts',
      message: error.message
    }

    return { CustomError }
  }
}
//* =====================================================================================

//* =====================================================================================
//* 2.- GET PRODUCT BY ID - OK
//* =====================================================================================
export async function getProductById(productId: string) {
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: { id: productId },
      include: {
        categories: true,
        tags: true
      }
    })
    return { product }
  } catch (error: prismaError) {
    console.error('Error: "lib/prisma/products/products.ts" -> "getProductById"')
    console.error('Error Message: ', error.message)
    console.error('Prisma Error: ', error)

    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProductById',
      code: error.code,
      errorCode: error.errorCode,
      name: error.name,
      message: error.message,
      meta: error.meta,
      clientVersion: error.clientVersion
    }

    return { CustomError }
  }
}
//* =====================================================================================

//* =====================================================================================
//* 3.- GET PRODUCT BY TAG - OK
//* =====================================================================================
export async function getProductsByTag(productTag: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        tags: {
          some: {
            name: {
              equals: productTag
            }
          }
        }
      },
      include: {
        categories: true,
        tags: true
      }
    })
    if (products.length === 0)
      throw new Error(`Products with the tag: "${productTag}", were not found`)
    return { products }
  } catch (error: prismaError) {
    console.error('Error: lib/prisma/products/products.ts -> "getProductsByTag"')
    console.error('Prisma Error: ', error)

    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProductsByTag',
      message: error.message
    }

    return { CustomError }
  }
}
//* =====================================================================================
