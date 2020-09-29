import React, { useState } from 'react'

interface ICart {
  getCount(): number
  addToCart(productId: number): void
}

export const CartContext = React.createContext<ICart>({} as ICart)

export const CartProvider: React.FC = ({ children }) => {
  const [productsState, setProductsState] = useState()

  const getCount = () => {
    const products = localStorage.getItem('Cart:Products')

    if (products) {
      let productsArray = JSON.parse(products)

      return productsArray.length
    }

    return 0
  }

  const addToCart = (productId: number) => {
    const products = localStorage.getItem('Cart:Products')

    if (products) {
      let productsArray = JSON.parse(products)

      if (productsArray.indexOf(productId) === -1) {
        productsArray.push(productId)

        setProductsState(productsArray)

        localStorage.setItem('Cart:Products', JSON.stringify(productsArray))
      }
    } else {
      let productsArray = []

      productsArray.push(productId)

      setProductsState(productsArray)

      localStorage.setItem('Cart:Products', JSON.stringify(productsArray))
    }
  }

  return (
    <CartContext.Provider value={{ getCount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): ICart {
  const context = React.useContext(CartContext)

  return context
}