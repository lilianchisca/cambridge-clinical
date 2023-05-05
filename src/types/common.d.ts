import { ReactNode } from 'react'

export type PropsWithChildren<P = unknown> = P & { children?: ReactNode }
export type PropsWithClassName<P = unknown> = P & { className?: string }
export type PropsWithChildrenAndClassName<P = unknown> = PropsWithClassName<P> &
  PropsWithChildren<P>
