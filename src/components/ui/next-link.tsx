import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

export type NextLinkProps = {
  href: string
  children: ReactNode
  openNewTab?: boolean
  className?: string
  nextLinkProps?: Omit<LinkProps, 'href'>
} & ComponentPropsWithRef<'a'>

const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#')

    if (!isNewTab) {
      return (
        <Link href={href} ref={ref} className={className} {...rest} {...nextLinkProps}>
          <span>{children}</span>
        </Link>
      )
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={className}
      >
        <span>{children}</span>
      </a>
    )
  }
)
NextLink.displayName = 'NextLink'

export default NextLink
