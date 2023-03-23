import { Product, ProductCategory, ProductTag } from '@prisma/client'

type ProductIncludeRelations = Product & { categories: ProductCategory[]; tags: ProductTag[] }

//* =====================================================================================
//* 1.- Get All Products - OK
//* =====================================================================================
const getProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all`).then(response =>
    response.json()
  )
}
//* =====================================================================================

//* =====================================================================================
//* 2.- Get Product By ID - OK
//* =====================================================================================
const getProductById = async (productId: string): Promise<ProductIncludeRelations> => {
  return await fetch(`${process.env.BASE_URL}/api/products/${productId}`).then(response =>
    response.json()
  )
}
//* =====================================================================================

//* =====================================================================================
//* 3.- Latest Products - OK
//* =====================================================================================
const getLatestProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.latest`).then(response =>
    response.json()
  )
}
//* =====================================================================================

//* =====================================================================================
//* 4.- New Arrivals Products - OK
//* =====================================================================================
const getNewArrivalsProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.new.arrivals`).then(response =>
    response.json()
  )
}
//* =====================================================================================

//* =====================================================================================
//* 5.- Most Wanted Products - OK
//* =====================================================================================
//* -------------------------------------------------------------------------------------
const getMostWantedProducts = async (): Promise<ProductIncludeRelations[]> => {
  return await fetch(`${process.env.BASE_URL}/api/products/get.all.most.wanted`).then(response =>
    response.json()
  )
}
//* =====================================================================================

//* =====================================================================================
//* 5.- Export
//* =====================================================================================
export const services = {
  getProducts,
  getProductById,
  getLatestProducts,
  getNewArrivalsProducts,
  getMostWantedProducts
}
//* =====================================================================================
