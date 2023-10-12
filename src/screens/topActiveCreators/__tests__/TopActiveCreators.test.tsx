import { render, screen } from '@testing-library/react'

import * as data from '../../../services/__Mocks__/creatorsProducts.json'
import * as useCreators from '../../../services/creatorsProducts/useCreators'
import { TopActiveCreators } from '..'

describe('TopActiveCreators', () => {
  const topCreators = 2

  it('renders the component in the document', () => {
    jest.spyOn(useCreators, 'useCreators').mockReturnValue(data)

    const { getByRole, getByTestId } = render(
      <TopActiveCreators numberOfTopCreators={topCreators} />
    )
    const component = getByTestId('top-active-creators')
    const list = getByRole('list')
    const listItem = screen.queryAllByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(list).toBeInTheDocument()
    expect(listItem.length).toBe(2)
  })
})
