import type { PropsWithChildren } from 'react'

export type Target = '_self' | '_blank' | '_parent' | '_top'

export type LinkProps = PropsWithChildren<{
  href: string
  target?: Target
  download?: boolean
}>
