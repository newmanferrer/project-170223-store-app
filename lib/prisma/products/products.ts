import { prisma } from '@/lib'

interface customError {
  route: string
  function: string
  message: string
  code?: string
  errorCode?: string
  name?: string
  meta?: string
  clientVersion?: string
}

type prismaError = any | unknown | customError

//* =====================================================================================
//* 1.- GET ALL PRODUCTS - OK
//* =====================================================================================
export async function getProducts() {
  try {
    const products = await prisma.product.findMany({ include: { categories: true, tags: true } })
    if (products.length === 0) throw new Error(`Products were not found`)
    return { products }
  } catch (error: prismaError) {
    const CustomError: customError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProducts',
      message: error.message,
      code: error.code,
      errorCode: error.errorCode,
      name: error.name,
      meta: error.meta,
      clientVersion: error.clientVersion
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
    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProductById',
      message: error.message,
      code: error.code,
      errorCode: error.errorCode,
      name: error.name,
      meta: error.meta,
      clientVersion: error.clientVersion
    }
    return { CustomError }
  }
}
//* =====================================================================================

//* =====================================================================================
//* 3.- GET PRODUCT BY  CATEGORY - OK
//* =====================================================================================
export async function getProductsByCategory(productCategory: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            name: {
              equals: productCategory
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
      throw new Error(`Products with the category: ${productCategory}, were not found`)
    return { products }
  } catch (error: prismaError) {
    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProductsByCategory',
      message: error.message,
      code: error.code,
      errorCode: error.errorCode,
      name: error.name,
      meta: error.meta,
      clientVersion: error.clientVersion
    }
    return { CustomError }
  }
}
//* =====================================================================================

//* =====================================================================================
//* 4.- GET PRODUCT BY TAG - OK
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
      throw new Error(`Products with the tag: ${productTag}, were not found`)
    return { products }
  } catch (error: prismaError) {
    const CustomError = {
      route: 'lib/prisma/products/products.ts',
      function: 'getProductsByTag',
      message: error.message,
      code: error.code,
      errorCode: error.errorCode,
      name: error.name,
      meta: error.meta,
      clientVersion: error.clientVersion
    }
    return { CustomError }
  }
}
//* =====================================================================================
