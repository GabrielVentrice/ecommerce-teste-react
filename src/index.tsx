import React from 'react'
import ReactDOM from 'react-dom'

import { ResetCss } from './styles/reset-css'
import { GlobalStyle } from './styles/global-styles'

import { CartProvider } from './hooks/cart-context'

import Home from './pages/home'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ResetCss></ResetCss>
      <GlobalStyle></GlobalStyle>
      <Home />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
