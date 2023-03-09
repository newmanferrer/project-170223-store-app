import { PrismaClient } from '@prisma/client'
import { products, categories, tags } from '../data/index.mjs'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty'
})

async function main() {
  await prisma.product.deleteMany()
  await prisma.productCategory.deleteMany()
  await prisma.productTag.deleteMany()

  products.map(async product => {
    await prisma.product.create({
      data: product
    })
  })

  categories.map(async category => {
    await prisma.productCategory.create({
      data: category
    })
  })

  tags.map(async tag => {
    await prisma.productTag.create({
      data: tag
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
