import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ headerItems }) => (
  <header>
    <ul>
      {headerItems.map(({ href, label, ariaLabel }) => (
        <li key={`${label}-${href}`}>
          <Link aria-label={ariaLabel} href={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </header>
)
