import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { FooterProps } from './types'

export const Footer: FC<FooterProps> = ({ footerItems }) => (
  <footer className="bg-gray-900 text-white">
    <ul className="flex items-center justify-center">
      {footerItems.map(({ href, label, ariaLabel }) => (
        <li key={`${label}-${href}`} className="p-3">
          <Link aria-label={ariaLabel} href={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
)
