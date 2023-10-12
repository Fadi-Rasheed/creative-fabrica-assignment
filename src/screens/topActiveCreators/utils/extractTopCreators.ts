import type { MappedProductsToCreators } from '../types'

export const extractTopCreators = (rank: number, mappedCreators?: MappedProductsToCreators) => {
  if (!mappedCreators) {
    return { topCreators: [], rest: [] }
  }

  const sortedCreators = Object.values(mappedCreators).sort((a, b) => {
    if (a.productsCount === b.productsCount) {
      return a.lastActive > b.lastActive ? -1 : 1
    }
    return b.productsCount - a.productsCount
  })

  const topCreators = sortedCreators.slice(0, rank)
  const rest = sortedCreators.slice(rank)

  return { topCreators, rest }
}
