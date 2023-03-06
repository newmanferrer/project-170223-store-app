export interface IProduct {
  name: string
  price: number
  stock: number
  short_description: string
  long_description: string
  brand_name: string
  brand_logo: string
  image: string
}

export interface IProductCategory {
  name: String
  description: String
  image?: String
}

export interface IProductTag {
  name: String
  description: String
  image?: String
}
