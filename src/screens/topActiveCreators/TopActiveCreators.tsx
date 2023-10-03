import { useMemo } from 'react'

import { Card } from '../../components/Card'
import { Main } from '../../sections/Main'
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
    <Main>
      {topCreators.map(({ creatorEmail }, i) => (
        <Card title={`${i + 1}`} description={creatorEmail} key={creatorEmail} />
      ))}
    </Main>
  )
}
