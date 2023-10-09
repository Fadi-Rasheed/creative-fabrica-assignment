import type { FC, PropsWithChildren } from 'react'

import { AppErrorBoundary } from './AppErrorBoundary'
import { QueryProvider } from './services/QueryProvider'

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => (
  <AppErrorBoundary>
    <QueryProvider>
      <div className="min-h-screen flex flex-col">{children}</div>
    </QueryProvider>
  </AppErrorBoundary>
)
