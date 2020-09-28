import React from 'react'
import ReactDOM from 'react-dom'

import { ResetCss } from './styles/reset-css'
import { GlobalStyle } from './styles/global-styles'

import Home from './pages/home'

ReactDOM.render(
  <React.StrictMode>
    <ResetCss></ResetCss>
    <GlobalStyle></GlobalStyle>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
