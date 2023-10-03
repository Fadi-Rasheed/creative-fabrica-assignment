import type { FC, PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export const AppErrorBoundary: FC<PropsWithChildren> = ({ children }) => (
  <ErrorBoundary fallback={<div />}>{children}</ErrorBoundary>
)
