import type { FC } from 'react'

import { Link } from '../../components/Link'
import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ headerItems }) => (
  <header className="bg-gray-900 flex flex-wrap items-center justify-between gap-y-4 p-6">
    <div className="w-full flex justify-center md:justify-start md:items-center md:w-auto md:flex-grow">
      <img
        alt="Creative Fabrica"
        src="https://www.creativefabrica.com/wp-content/uploads/2023/09/19/Creative-Fabrica-Halloween-Logo-1120x111.png"
        className="h-8"
      />
    </div>
    <nav className="w-full text-white md:w-auto md:flex-grow">
      <ul className="flex items-center justify-around">
        {headerItems.map(({ href, label, ariaLabel }) => (
          <li key={`${label}-${href}`}>
            <Link aria-label={ariaLabel} href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
