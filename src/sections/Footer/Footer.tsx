import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { FooterProps } from './types'

export const Footer: FC<FooterProps> = ({ footerItems }) => (
  <footer>
    <ul>
      {footerItems.map(({ href, label, ariaLabel }) => (
        <li key={`${label}-${href}`}>
          <Link aria-label={ariaLabel} href={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
)
