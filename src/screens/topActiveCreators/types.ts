import type { Creator, Product } from '../../services/creatorsProducts/types'

export interface MappedProductToCreator {
  creatorEmail: Creator['email']
  productsCount: number
  lastActive: Product['createTime']
}

export type MappedProductsToCreators = Record<string, MappedProductToCreator>
