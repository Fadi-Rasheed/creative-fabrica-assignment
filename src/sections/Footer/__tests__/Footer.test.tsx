import { render, screen } from '@testing-library/react'

import { FOOTER_PROPS } from '../../../constants/constants'
import { Footer } from '..'

describe('Footer', () => {
  it('renders the component in the document', () => {
    const { getByRole } = render(<Footer footerItems={FOOTER_PROPS} />)
    const component = getByRole('contentinfo')
    const footerNavigation = getByRole('navigation')
    const footerList = getByRole('list')
    const links = screen.queryAllByRole('link')

    expect(component).toBeInTheDocument()
    expect(footerNavigation).toBeInTheDocument()
    expect(footerList).toBeInTheDocument()
    expect(links).not.toBe(0)
  })
})
