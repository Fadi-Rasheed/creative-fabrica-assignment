import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { FooterProps } from './types'

export const Footer: FC<FooterProps> = ({ FooterItems }) => (
  <footer>
    {FooterItems.map(({ href, label, ariaLabel }) => (
      <Link aria-label={ariaLabel} href={href} key={`${label}-${href}`}>
        {label}
      </Link>
    ))}
  </footer>
)
