const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty'
})

async function main() {
  await prisma.product.deleteMany()
  await prisma.productCategory.deleteMany()
  await prisma.productTag.deleteMany()

  //* GITHUB
  await prisma.product.create({
    data: {
      name: 'GitHub Octocat Figurine',
      price: 29.99,
      stock: 73,
      short_description:
        'For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5" vinyl figurine.',
      long_description:
        'For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5" vinyl figurine.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/small-octocat-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'GitHub Invertocat Hoodie',
      price: 59.99,
      stock: 73,
      short_description:
        'Sometimes coding requires working in cold environments. Its often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you cant afford fingers or sleeves.',
      long_description:
        'Sometimes coding requires working in cold environments. Its often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you cant afford fingers or sleeves. If only someone would create a body covering with a hood type of device to cover your head.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/invertocat-hoodie-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'GitHub Gold Cap - Limited Edition',
      price: 29.99,
      stock: 73,
      short_description:
        '100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.',
      long_description:
        '100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/octo-cap-gold-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'GitHub Black Cap - Limited Edition',
      price: 39.99,
      stock: 73,
      short_description:
        'This classic structured TravisMathew logo cap with a tone-on-tone invertocat logo will cap off any attire.',
      long_description:
        'This classic structured TravisMathew logo cap with a tone-on-tone invertocat logo will cap off any attire.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/octo-cap-black-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'GitHub Sticker Packs',
      price: 5.99,
      stock: 73,
      short_description:
        '*Pssst*  Yeah, you over there.  That one sticker on your laptop is looking mighty lonely.',
      long_description:
        '*Pssst*  Yeah, you over there.  That one sticker on your laptop is looking mighty lonely.  Check out these sticker packs with some of our most loved stickers.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/stickers-packs-sampler-882x882.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'GitHub Fitted Boxercraft Quilted Pullover',
      price: 36.99,
      stock: 73,
      short_description:
        'Looking for an upgraded sweater? This diamond quilted crewneck from Boxercraft has you covered.',
      long_description:
        'Looking for an upgraded sweater? This diamond quilted crewneck from Boxercraft has you covered. The embroidered Invertocat is the cherry on top of the raglan sleeves and tonal elbow patches for that nerdy, retro vibe. Available in fitted sizes.',
      brand_name: 'GitHub',
      brand_logo: '/images/products/github/brand-logo.webp',
      image: '/images/products/github/github-fitted-boxercraft-quilted-pullover-882x882.webp'
    }
  })

  //* ADIDAS
  await prisma.product.create({
    data: {
      name: 'Adidas Ultraboost Light Shoes - Black',
      price: 190.99,
      stock: 73,
      short_description:
        'Epic energy. Lightest ever. BOOST turns 10! After a decade of energizing runners around the world, we are stepping out with an even lighter shoe — the Ultraboost Light.',
      long_description:
        'Epic energy. Lightest ever. BOOST turns 10! After a decade of energizing runners around the world, we are stepping out with an even lighter shoe — the Ultraboost Light. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date and boasts a 10% lower carbon footprint than previous models.',
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-ultraboost-light-shoes-black.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Adidas Ultraboost Light Shoes - Red',
      price: 190.99,
      stock: 73,
      short_description:
        'Epic energy. Lightest ever. Go bold and bright with Ultraboost Light red colorway, exclusive to adidas stores. ',
      long_description:
        'Epic energy. Lightest ever. Go bold and bright with Ultraboost Light red colorway, exclusive to adidas stores. BOOST turns 10! After a decade of energizing runners around the world, we are stepping out with an even lighter shoe — the Ultraboost Light. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date and boasts a 10% lower carbon footprint than previous models.',
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-ultraboost-light-shoes-red.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Adidas Event Tricot Jacket',
      price: 27.99,
      stock: 73,
      short_description:
        "A full zip track jacket with classic 3 stripes styles. Flip through a 70s yearbook and you'd see adidas track tops like this juniors' jacket",
      long_description:
        "A full zip track jacket with classic 3 stripes styles. Flip through a 70s yearbook and you'd see adidas track tops like this juniors' jacket. Lifetimes later, and the look is fresh as ever. Tricot fabric gives this everyday layer a signature sheen and silky-smooth feel.",
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-event-tricot-jacket.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Adidas Techfit Short Tights',
      price: 20.99,
      stock: 73,
      short_description:
        'New strength comes with every workout. Flex through every squat and lift in these adidas multi-sport tights.',
      long_description:
        'New strength comes with every workout. Flex through every squat and lift in these adidas multi-sport tights. A compression fit supports muscle. AEROREADY wicks sweat for a quick-drying, fresh feel through every session, indoors or out. This product is made  with Primegreen, a series of high-performance recycled material.',
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-techfit-short-tights-black.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Adidas Own The Run Long Sleeve Tee',
      price: 36.99,
      stock: 73,
      short_description:
        'Cool-weather runs are worth every once of the effort. Pull on this adidas t-shirt as a comfortable second layer and face the refreshing outside air.',
      long_description:
        'Cool-weather runs are worth every once of the effort. Pull on this adidas t-shirt as a comfortable second layer and face the refreshing outside air. AEROREADY absorbs moisture so it never gets the best of yoy. Reflective details shine in low light. Made with 100% recycled content, this product represents just one of our solutions to help end plastic waste.',
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-own-the-run-long-sleeve-tee-pink.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Adidas Essentials Slim 3-Stripes Tee Grey',
      price: 18.99,
      stock: 73,
      short_description:
        'Let your sporty side shine in this slim-fit tee. The 3-Stripes run down both sleeves in contrasting color thar really pops.',
      long_description:
        'Let your sporty side shine in this slim-fit tee. The 3-Stripes run down both sleeves in contrasting color thar really pops. The tee has a classic look that pairs with nearly anything, from jeans to a tennis skirt to workout leggings. Our cotton products support sustainable cotton farming. This is part of our ambition to end plastic waste.',
      brand_name: 'Adidas',
      brand_logo: '/images/products/adidas/brand-logo.webp',
      image: '/images/products/adidas/adidas-essentials-slim-3-stripes-tee-grey.webp'
    }
  })

  //* NIKE
  await prisma.product.create({
    data: {
      name: 'Nike Invincible 3',
      price: 180.99,
      stock: 73,
      short_description:
        'With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond.',
      long_description:
        'With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond. Designed to help keep you on the run, it’s super supportive and bouncy, so that you can propel down your preferred path and come back for your next run feeling ready and reinvigorated. ',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-invincible-3-blue.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Nike Alphafly 2',
      price: 275.99,
      stock: 73,
      short_description:
        'Once you take a few strides in the Nike Air Zoom Alphafly NEXT 2, you’ll never look at your favorite pair of old racing shoes the same way again.',
      long_description:
        'Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you’ll never look at your favorite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.',
      description:
        'With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond.',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-alphafly-2-orangered.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Nike Everything Womens Support Bra Gray',
      price: 42.99,
      stock: 73,
      short_description:
        'Get inspired by the Big Apple in this snug and supportive sports bra. Designed for those who move, it pairs lightweight fabric that moves sweat away from your skin with just the right amount of stretch.',
      long_description:
        'Get inspired by the Big Apple in this snug and supportive sports bra. Designed for those who move, it pairs lightweight fabric that moves sweat away from your skin with just the right amount of stretch. A high-cut neckline and longline hem provide a bit of extra coverage while a racerback design lets you move without restriction.',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-everything-womens-support-bra-gray.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Nike One Womens Training Leggings',
      price: 28.97,
      stock: 73,
      short_description:
        'Whether you’re planning to hit your local trails for a hike, roll out your mat for a restorative yoga flow or just heading to the grocery store, our Nike Dri-FIT One Leggings will be your new go-to.',
      long_description:
        'Whether you’re planning to hit your local trails for a hike, roll out your mat for a restorative yoga flow or just heading to the grocery store, our Nike Dri-FIT One Leggings will be your new go-to. Sweat-wicking technology helps keep you feeling dry while the non-sheer fabric lets you squat and bend in confidence. The mid-rise waistband sits below your belly button and features 2 hidden pockets.',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-one-womens-training-leggings.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Nike Air Jordan XXXVII SP Green',
      price: 200.99,
      stock: 73,
      short_description:
        'You have got the hops and the speed—lace up in shoes that enhance what you bring to the court.',
      long_description:
        'You have got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to get you off the ground and our signature Formula 23 foam to cushion your impact. Up top, you will find layers of tough, reinforced leno-weave fabric that will keep you contained—and leave your game uncompromised—no matter how fast you move.',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-air-jordan-xxxvii-sp-green.webp'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Nike Therma 2023 World Baseball Classic Dugout Blue',
      price: 80.99,
      stock: 73,
      short_description:
        'The Nike Therma 2023 World Baseball Classic Dugout (USA Baseball) Hoodie.',
      long_description:
        'The Nike Therma 2023 World Baseball Classic Dugout (USA Baseball) Hoodie combines sweat-wicking technology with performance fabric to help keep you warm and comfortable as the American stars compete against some of baseball best.',
      brand_name: 'Nike',
      brand_logo: '/images/products/nike/brand-logo.webp',
      image: '/images/products/nike/nike-therma-2023-world-baseball-classic-dugout-blue.webp'
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
