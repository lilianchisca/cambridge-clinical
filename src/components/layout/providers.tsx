'use client'

import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { ToastContainer } from 'react-toastify'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

import { PropsWithChildren } from '@/types/common'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <TooltipProvider delayDuration={300}>
        <BalancerProvider>{children}</BalancerProvider>
        <ToastContainer position='bottom-right' autoClose={10000} />
      </TooltipProvider>
    </>
  )
}
