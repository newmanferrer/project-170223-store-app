const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()

  await prisma.product.create({
    data: {
      name: 'Octocat Figurine',
      price: 29.99,
      stock: 73,
      description:
        'For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5" vinyl figurine.',
      brand_name: 'GitHub',
      brand_logo: '/images/brands/github-logo.webp',
      image: '/images/products/small-octocat-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Invertocat Hoodie',
      price: 59.99,
      stock: 73,
      description:
        'Sometimes coding requires working in cold environments. Its often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you cant afford fingers or sleeves. If only someone would create a body covering with a hood type of device to cover your head.',
      brand_name: 'GitHub',
      brand_logo: '/images/brands/github-logo.webp',
      image: '/images/products/invertocat-hoodie-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Gold Cap - Limited Edition',
      price: 29.99,
      stock: 73,
      description:
        '100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.',
      brand_name: 'GitHub',
      brand_logo: '/images/brands/github-logo.webp',
      image: '/images/products/octo-cap-gold-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Black Cap - Limited Edition',
      price: 39.99,
      stock: 73,
      description:
        'This classic structured TravisMathew logo cap with a tone-on-tone invertocat logo will cap off any attire.',
      brand_name: 'GitHub',
      brand_logo: '/images/brands/github-logo.webp',
      image: '/images/products/octo-cap-black-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Sticker Packs',
      price: 5.99,
      stock: 73,
      description:
        '*Pssst*  Yeah, you over there.  That one sticker on your laptop is looking mighty lonely.  Check out these sticker packs with some of our most loved stickers.',
      brand_name: 'GitHub',
      brand_logo: '/images/brands/github-logo.webp',
      image: '/images/products/stickers-packs-sampler-882x882.webp'
    }
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
