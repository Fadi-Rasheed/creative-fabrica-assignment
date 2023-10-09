import type { FC } from 'react'

import { getAnchorRel } from '../../utils/getAnchorRel'
import type { LinkProps } from './types'

export const Link: FC<LinkProps> = ({ href, target = '_self', download, children, ...props }) => (
  <a
    href={href}
    target={target}
    download={download}
    rel={getAnchorRel(target)}
    className="hover:text-blue-400"
    {...props}
  >
    {children}
  </a>
)
