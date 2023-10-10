import { render } from '@testing-library/react'

import { Link } from '..'

describe('Link', () => {
  it('renders the component in the document', () => {
    const url = 'https://www.creativefabrica.com/'
    const { getByRole } = render(<Link href={url} />)
    const link = getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', url)
    expect(link).toHaveAttribute('target', '_self')
    expect(link).not.toHaveAttribute('download')
  })
})
