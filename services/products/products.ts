import { IProduct, IProductCategory, IProductTag } from '@/models'

//* *************************************************************************************
//* 1.- All Products
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 1.1.- Generate static HTML
//* -------------------------------------------------------------------------------------
//* Default: It is equivalent to the old "getStaticProps()" in Nextjs 12
//* Note: It is not necessary to put the parameter: "{ cache: 'force-cache' }"
//* -------------------------------------------------------------------------------------
const getAllProductsStatic = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.products`).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.2.- Generate Dynamic HTML if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old "getServerSideProps()" in Nextjs 12
//* -------------------------------------------------------------------------------------
const getAllProductsDynamic = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.products`, { cache: 'no-store' }).then(
    response => response.json()
  )
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.3.- Generate Increment HTML - Revalidate Data if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old (ISR) "Incremental Static Regeneration" in Nextjs 12
//* Note: revalidate in seconds
//* -------------------------------------------------------------------------------------
const getAllProductsIncrement = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.products`, {
    next: { revalidate: 60 }
  }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************

//* *************************************************************************************
//* 2.- Latest Products
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 2.1.- Generate static HTML
//* -------------------------------------------------------------------------------------
//* Default: It is equivalent to the old "getStaticProps()" in Nextjs 12
//* Note: It is not necessary to put the parameter: "{ cache: 'force-cache' }"
//* -------------------------------------------------------------------------------------
const getAllLatestProductsStatic = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.latest.products`).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 2.2.- Generate Dynamic HTML if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old "getServerSideProps()" in Nextjs 12
//* -------------------------------------------------------------------------------------
const getAllLatestProductsDynamic = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.latest.products`, {
    cache: 'no-store'
  }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 2.3.- Generate Increment HTML - Revalidate Data if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old (ISR) "Incremental Static Regeneration" in Nextjs 12
//* Note: revalidate in seconds
//* -------------------------------------------------------------------------------------
const getAllLatestProductsIncrement = async (): Promise<IProduct[]> => {
  return await fetch(`${process.env.BASE_URL}/api/get.all.latest.products`, {
    next: { revalidate: 60 }
  }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************

//* *************************************************************************************
//* 3.- Export
//* *************************************************************************************
export const services = {
  getAllProductsStatic,
  getAllProductsDynamic,
  getAllProductsIncrement,
  getAllLatestProductsStatic,
  getAllLatestProductsDynamic,
  getAllLatestProductsIncrement
}
//* *************************************************************************************
