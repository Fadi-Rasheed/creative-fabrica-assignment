import { render, screen } from '@testing-library/react'

import { HEADER_PROPS } from '../../../constants/constants'
import { Header } from '..'

describe('Header', () => {
  it('renders the component in the document', () => {
    const { getByRole } = render(<Header headerItems={HEADER_PROPS} />)

    const component = getByRole('banner')
    const headerNavigation = getByRole('navigation')
    const headerList = getByRole('list')
    const links = screen.queryAllByRole('link')
    const img = screen.getByRole('img')

    expect(component).toBeInTheDocument()
    expect(headerNavigation).toBeInTheDocument()
    expect(headerList).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(links).not.toBe(0)
  })
})
