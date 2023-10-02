import { Card } from '../../components/Card'
import { Main } from '../../sections/Main'
import { useCreators } from '../../services/creatorsProducts/useCreators'

export const TopActiveCreators = () => {
  const data = useCreators()

  return (
    <Main>
      <Card title="1" description="a" />
      <Card title="2" description="a" />
      <Card title="3" description="a" />
    </Main>
  )
}
