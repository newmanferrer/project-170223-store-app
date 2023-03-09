import { IProduct } from '../'

export interface IProductTag {
  id: string
  name: string
  description: string
  image?: string
  products: IProduct[] | []
}
