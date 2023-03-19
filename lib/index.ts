export { prisma } from './prisma/db/client'

export {
  getProducts,
  getProductById,
  getProductsByTag,
  createProduct
} from './prisma/products/products'

export { convertProductNameToPath, createFriendlyUrl } from './utils'
