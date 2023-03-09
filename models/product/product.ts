import { IProductCategory, IProductTag } from '../'

export interface IProduct {
  id: string
  name: string
  price: number
  stock: number
  short_description: string
  long_description: string
  brand_name: string
  brand_logo: string
  image: string
  categories?: IProductCategory[] | []
  tags?: IProductTag[] | []
}
