import { useQuery } from '@tanstack/react-query'

import { servicesUrls } from '../constants'
import { apiQuery } from '../utils/apiQuery'
import type { CreatorsProducts } from './types'

const getCreatorsData = async () => {
  try {
    return await apiQuery<CreatorsProducts>(servicesUrls.CREATORS_PRODUCTS)
  } catch (error: unknown) {
    console.log(error)
  }
}

export const useCreators = () => {
  const { data } = useQuery({
    queryKey: ['creators-products'],
    queryFn: getCreatorsData,
  })

  return data
}
