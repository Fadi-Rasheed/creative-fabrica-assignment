import type { Creator, CreatorsProducts } from '../../../services/creatorsProducts/types'
import type { MappedProductToCreator } from '../types'

export const mapProductsToCreators = (data?: CreatorsProducts) => {
  if (!data) {
    return
  }

  const { Products: products, Creators: creators } = data

  const creatorsByID = creators.reduce((acc: Record<Creator['id'], Creator['email']>, cur) => {
    const { id, email } = cur
    acc[id] = email

    return acc
  }, {})

  return products.reduce((acc: Record<string, MappedProductToCreator>, cur) => {
    const { creatorId, createTime } = cur
    const id = acc[creatorId] as unknown as MappedProductToCreator | undefined

    if (id) {
      id.productsCount = id.productsCount + 1
      id.lastActive = id.lastActive > createTime ? id.lastActive : createTime
      return acc
    }

    acc[creatorId] = {
      creatorEmail: creatorsByID[creatorId],
      productsCount: 1,
      lastActive: createTime,
    }

    return acc
  }, {})
}
