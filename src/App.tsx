/* eslint-disable import/no-default-export */

import { AppWrapper } from './AppWrapper'
import { FOOTER_PROPS, HEADER_PROPS, NUMBER_OF_TOP_CREATORS } from './constants/constants'
import { TopActiveCreators } from './screens/topActiveCreators'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'

function App() {
  return (
    <AppWrapper>
      <Header headerItems={HEADER_PROPS} />
      <main className="grow flex flex-col">
        <TopActiveCreators numberOfTopCreators={NUMBER_OF_TOP_CREATORS} />
      </main>
      <Footer footerItems={FOOTER_PROPS} />
    </AppWrapper>
  )
}

export default App
