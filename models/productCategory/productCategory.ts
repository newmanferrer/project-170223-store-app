import { IProduct } from '../'

export interface IProductCategory {
  id: string
  name: string
  description: string
  image?: string
  products?: IProduct[] | []
}
