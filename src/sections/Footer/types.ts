interface FooterItem {
  label: string
  href: string
  ariaLabel: string
}

export interface FooterProps {
  footerItems: FooterItem[]
}
