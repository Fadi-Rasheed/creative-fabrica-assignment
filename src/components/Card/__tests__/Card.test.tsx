import { render } from '@testing-library/react'

import { Card } from '..'

describe('Card', () => {
  it('renders the component in the document', () => {
    const cardTitle = 'title'
    const cardDescription = 'description'
    const { getByText } = render(<Card title={cardTitle} description={cardDescription} />)
    const title = getByText(cardTitle, { selector: 'h3' })
    const description = getByText(cardDescription)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
