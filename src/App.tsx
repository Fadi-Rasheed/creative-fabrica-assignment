/* eslint-disable import/no-default-export */
/* eslint-disable react/jsx-no-bind */
import './App.css'

import { useState } from 'react'

import viteLogo from '../public/vite.svg'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  const onClickHandler = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={onClickHandler}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
