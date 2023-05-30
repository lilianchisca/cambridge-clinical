export type PropsWithClassName<P = unknown> = P & { className?: string }
export type PropsWithChildrenAndClassName<P = unknown> = PropsWithClassName<P> &
  PropsWithChildren<P>

export type JSONResponseWithData<T> = { data: T }

export type ReturnedPromiseResolvedType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : never

export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden
