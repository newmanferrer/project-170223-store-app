import { Product, ProductCategory, ProductTag } from 'prisma/prisma-client'

export type ProductIncludeRelations = Product & {
  categories: ProductCategory[]
  tags: ProductTag[]
}

//* =====================================================================================
//* 1.- Get All Products - OK
//* =====================================================================================
const getProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all`)
  const data = await response.json()
  const products = data.products

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 2.- Get Product By ID - OK
//* =====================================================================================
const getProductById = async (productId: string): Promise<ProductIncludeRelations> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/${productId}`)
  const data = await response.json()
  const product = data.product

  return product
}
//* =====================================================================================

//* =====================================================================================
//* 3.- Latest Products - OK
//* =====================================================================================
const getLatestProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.latest`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 4.- New Arrivals Products - OK
//* =====================================================================================
const getNewArrivalsProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.new.arrivals`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 5.- Most Wanted Products - OK
//* =====================================================================================
//* -------------------------------------------------------------------------------------
const getMostWantedProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.most.wanted`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 6.- Most Popular Products - OK
//* =====================================================================================
const getMostPopularProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.most.popular`)
  const data = await response.json()
  const products = data.products

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 7.- Most Anticipated Products - OK
//* =====================================================================================
const getMostAnticipatedProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.most.anticipated`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 8.- Men Products - OK
//* =====================================================================================
const getMenProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.men`)
  const data = await response.json()
  const products = data.products

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 9.- Women Products - OK
//* =====================================================================================
const getWomenProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.women`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 10.- Kids Products - OK
//* =====================================================================================
const getKidsProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.kids`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 11.- Shoes Products - OK
//* =====================================================================================
const getShoesProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.shoes`)
  const data = await response.json()
  const products = data.products

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 12.- Adidas Products - OK
//* =====================================================================================
const getAdidasProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.adidas`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 13.- Nike Products - OK
//* =====================================================================================
const getNikeProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.nike`)
  const data = await response.json()
  const products = data

  return products
}
//* =====================================================================================

//* =====================================================================================
//* 14.- Github Products - OK
//* =====================================================================================
const getGithubProducts = async (): Promise<ProductIncludeRelations[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/products/get.all.github`)
  const data = await response.json()
  const products = data

  return products
}
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
