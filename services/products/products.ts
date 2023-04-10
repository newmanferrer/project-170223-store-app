import { Product, ProductCategory, ProductTag } from 'prisma/prisma-client'
import axios from 'axios'

type ProductIncludeRelations = Product & { categories: ProductCategory[]; tags: ProductTag[] }

//* =====================================================================================
//* 1.- Get All Products - OK
//* =====================================================================================
const getProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all`)
    .then(response => response.data)
}

/* const getProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 2.- Get Product By ID - OK
//* =====================================================================================
const getProductById = async (productId: string): Promise<ProductIncludeRelations> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/${productId}`)
    .then(response => response.data)
}

/* const getProductById = async (productId: string): Promise<ProductIncludeRelations> => {
  return await fetch(`${process.env.BASE_URL}/api/products/${productId}`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 3.- Latest Products - OK
//* =====================================================================================
const getLatestProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.latest`)
    .then(response => response.data)
}

/* const getLatestProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.latest`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 4.- New Arrivals Products - OK
//* =====================================================================================
const getNewArrivalsProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.new.arrivals`)
    .then(response => response.data)
}

/* const getNewArrivalsProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.new.arrivals`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 5.- Most Wanted Products - OK
//* =====================================================================================
//* -------------------------------------------------------------------------------------
const getMostWantedProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.most.wanted`)
    .then(response => response.data)
}

/* const getMostWantedProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.most.wanted`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 6.- Most Popular Products - OK
//* =====================================================================================
const getMostPopularProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.most.popular`)
    .then(response => response.data)
}

/* const getMostPopularProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.most.popular`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 7.- Most Anticipated Products - OK
//* =====================================================================================
const getMostAnticipatedProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.most.anticipated`)
    .then(response => response.data)
}

/* const getMostAnticipatedProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.most.anticipated`).then(
    response => response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 8.- Men Products - OK
//* =====================================================================================
const getMenProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.men`)
    .then(response => response.data)
}

/* const getMenProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.men`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 9.- Women Products - OK
//* =====================================================================================
const getWomenProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.women`)
    .then(response => response.data)
}

/* const getWomenProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.women`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 10.- Kids Products - OK
//* =====================================================================================
const getKidsProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.kids`)
    .then(response => response.data)
}

/* const getKidsProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.kids`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 11.- Shoes Products - OK
//* =====================================================================================
const getShoesProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.shoes`)
    .then(response => response.data)
}

/* const getShoesProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.shoes`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 12.- Adidas Products - OK
//* =====================================================================================
const getAdidasProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.adidas`)
    .then(response => response.data)
}

/* const getAdidasProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.adidas`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 13.- Nike Products - OK
//* =====================================================================================
const getNikeProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.nike`)
    .then(response => response.data)
}

/* const getNikeProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.nike`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 14.- Github Products - OK
//* =====================================================================================
const getGithubProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await axios
    .get(`${process.env.BASE_URL}/api/products/get.all.github`)
    .then(response => response.data)
}

/* const getGithubProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.github`).then(response =>
    response.json()
  )
} */
//* =====================================================================================

//* =====================================================================================
//* 15.- Export
//* =====================================================================================
export const services = {
  getProducts,
  getProductById,
  getLatestProducts,
  getNewArrivalsProducts,
  getMostWantedProducts,
  getMostPopularProducts,
  getMostAnticipatedProducts,
  getMenProducts,
  getWomenProducts,
  getKidsProducts,
  getShoesProducts,
  getAdidasProducts,
  getNikeProducts,
  getGithubProducts
}
//* =====================================================================================
