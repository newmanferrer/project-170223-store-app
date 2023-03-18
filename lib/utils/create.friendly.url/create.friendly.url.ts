import { IProduct } from '@/models'

export const createFriendlyUrl = (product: IProduct) => {
  return product.name.toLocaleLowerCase().replace(/\s/g, '-').concat(`-${product.id}`)
}
