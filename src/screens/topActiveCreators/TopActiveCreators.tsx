import { useMemo } from 'react'

import { Card } from '../../components/Card'
import { useCreators } from '../../services/creatorsProducts/useCreators'
import { extractTopCreators } from './utils/extractTopCreators'
import { mapProductsToCreators } from './utils/mapProductsToCreators'

const NUMBER_OF_TOP_CREATORS = 3

export const TopActiveCreators = () => {
  const data = useCreators()

  const mappedData = useMemo(() => mapProductsToCreators(data), [data])

  const { topCreators } = useMemo(
    () => extractTopCreators(NUMBER_OF_TOP_CREATORS, mappedData),
    [mappedData]
  )

  return (
    <section className="p-4">
      <h1 className="text-4xl font-extrabold text-center my-4 lg:my-8">Top Active Creators</h1>
      <ul className="flex flex-col items-center justify-around py-4 lg:py-6 lg:flex-row">
        {topCreators.map(({ creatorEmail }, i) => (
          <li key={creatorEmail} className="w-80 py-4 lg:py6">
            <Card title={`${i + 1}`} description={creatorEmail} />
          </li>
        ))}
      </ul>
    </section>
  )
}
