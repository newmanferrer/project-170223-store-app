export { prisma } from './prisma/db/client'
export { getAllProducts, getProductById, createProduct } from './prisma/products/products'

export { convertProductNameToPath, createFriendlyUrl } from './utils'
