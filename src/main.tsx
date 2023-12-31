/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
