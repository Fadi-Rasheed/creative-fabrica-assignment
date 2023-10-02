import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ HeaderItems }) => (
  <header>
    {HeaderItems.map(({ href, label, ariaLabel }) => (
      <Link aria-label={ariaLabel} href={href} key={`${label}-${href}`}>
        {label}
      </Link>
    ))}
  </header>
)
