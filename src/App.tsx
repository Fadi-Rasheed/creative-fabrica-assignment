/* eslint-disable import/no-default-export */

import { AppErrorBoundary } from './AppErrorBoundary'
import { FOOTER_PROPS, HEADER_PROPS } from './constants'
import { TopActiveCreators } from './screens/topActiveCreators/TopActiveCreators'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { QueryProvider } from './services/QueryProvider'

function App() {
  return (
    <AppErrorBoundary>
      <QueryProvider>
        <Header headerItems={HEADER_PROPS} />
        <TopActiveCreators />
        <Footer footerItems={FOOTER_PROPS} />
      </QueryProvider>
    </AppErrorBoundary>
  )
}

export default App
