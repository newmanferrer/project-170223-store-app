export { prisma } from './prisma/db/client'

export { getProducts, getProductById, getProductsByTag } from './prisma/products/products'

export { convertProductNameToPath, createFriendlyUrl, serialize } from './utils'
