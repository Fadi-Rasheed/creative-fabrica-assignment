import { useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Main } from '../../sections/Main'

export const TopActiveCreators = () => {
  const [activeCreators, setActiveCreators] = useState()
  useEffect(() => {}, [])
  return (
    <Main>
      <Card title="1" description="a" />
      <Card title="2" description="a" />
      <Card title="3" description="a" />
    </Main>
  )
}
