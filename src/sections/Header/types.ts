interface HeaderItem {
  label: string
  href: string
  ariaLabel: string
}

export interface HeaderProps {
  headerItems: HeaderItem[]
}
