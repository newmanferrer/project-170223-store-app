//* ///////////////////////////////////////////////////////////////////////////
//* Shopping Cart Context
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
'use client'

import { createContext, ReactNode, useState, useContext } from 'react'
import { Product, ProductCategory, ProductTag } from '@prisma/client'
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- ShoppingCartContextValues
//* ---------------------------------------------------------------------------
interface ShoppingCartContextValues {
  isOpen: boolean
  cart: Product[]
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: string) => void
  quantityAddOne: (productId: string) => void
  quantityRemoveOne: (productId: string) => void
  getNumberOfProducts: () => void
}
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 2.2.- IShoppingCartProviderProps
//* ---------------------------------------------------------------------------
interface IShoppingCartProviderProps {
  children: ReactNode
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the context
//* ===========================================================================
const ShoppingCartContext = createContext<ShoppingCartContextValues | undefined>(undefined)
//* ===========================================================================

//* ===========================================================================
//* 4.- Create the Provider
//* ===========================================================================
function ShoppingCartProvider({ children }: IShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<Product[] | []>([])

  const toggleCart = () => setIsOpen(!isOpen)

  const openCart = () => setIsOpen(isOpen => (isOpen = true))

  const closeCart = () => setIsOpen(isOpen => (isOpen = false))

  const addProductToCart = (product: Product) => {
    const tempCart = [...cart]
    const found = tempCart.find(productInCart => productInCart.id === product.id)

    if (found && found.stock) {
      found.stock++
    } else {
      const productToCart = { ...product, quantity: 1 }
      tempCart.push(productToCart)
    }

    setCart([...tempCart])
  }

  const removeProductToCart = (productId: string) => {
    const productToRemove = cart.find(product => product.id === productId)
    let newCart = []

    if (productToRemove) {
      newCart = cart.filter(product => product.id !== productId)
      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const quantityAddOne = (productId: string) => {
    const productToAdd = cart.find(product => product.id === productId)
    let newCart = []

    if (productToAdd) {
      newCart = cart.map(product =>
        product.id === productId ? { ...product, stock: product.stock + 1 } : product
      )
      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const quantityRemoveOne = (productId: string) => {
    const productToRemove = cart.find(product => product.id === productId)
    let newCart = []

    if (productToRemove) {
      if (productToRemove.stock > 1) {
        newCart = cart.map(product =>
          product.id === productToRemove.id ? { ...product, stock: product.stock - 1 } : product
        )
      } else {
        newCart = cart.filter(product => product.id !== productId)
      }

      setCart(newCart)
    } else {
      throw new Error(`product id "${productId}", not found!`)
    }
  }

  const getNumberOfProducts = () => {
    const total = cart.reduce((acc: number, product: Product) => acc + product.stock, 0)
    return total
  }

  const data: ShoppingCartContextValues = {
    isOpen,
    cart,
    toggleCart,
    openCart,
    closeCart,
    addProductToCart,
    removeProductToCart,
    quantityAddOne,
    quantityRemoveOne,
    getNumberOfProducts
  }

  return <ShoppingCartContext.Provider value={data}>{children}</ShoppingCartContext.Provider>
}
//* ===========================================================================

//* ===========================================================================
//* 5.- Create useShoppingCartContext
//* ===========================================================================
function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext)

  if (context === undefined) {
    throw Error('Error: useShoppingCartContext, must be used within a ShoppingCartProvider')
  }

  return context
}
//* ===========================================================================

//* ===========================================================================
//* 6.- Export
//* ===========================================================================
export { ShoppingCartProvider, useShoppingCartContext }
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
