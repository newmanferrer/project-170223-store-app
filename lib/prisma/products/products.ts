import { prisma } from '@/lib'
import { type Product } from '@prisma/client'

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({ include: { categories: true, tags: true } })
    return { products }
  } catch (error) {
    const ErrorMessage = 'Error: lib/prisma/products/products.ts -> "getAllProducts"'
    return { ErrorMessage }
  }
}

export async function getProductById(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { categories: true, tags: true }
    })
    return { product }
  } catch (error) {
    const ErrorMessage = 'Error: lib/prisma/products/products.ts -> "getProductById"'
    return { ErrorMessage }
  }
}

export async function createProduct(product: Product) {
  try {
    const productCreate = await prisma.product.create({ data: product })
    return { productCreate }
  } catch (error) {
    const ErrorMessage = 'Error: lib/prisma/products/products.ts -> "createProduct"'
    return { ErrorMessage }
  }
}
