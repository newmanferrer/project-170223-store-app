//* ///////////////////////////////////////////////////////////////////////////
//* Navigation Mobile Context
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
'use client'
import { createContext, ReactNode, useState, useContext } from 'react'
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- NavigationMobileContextValues
//* ---------------------------------------------------------------------------
interface INavigationMobileContextValues {
  navigationMobileIsOpen: boolean
  openNavigationMobile: () => void
  closeNavigationMobile: () => void
  toggleNavigationMobile: () => void
}
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 2.2.- INavigationMobileProviderProps
//* ---------------------------------------------------------------------------
interface INavigationMobileProviderProps {
  children: ReactNode
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the context
//* ===========================================================================
const NavigationMobileContext = createContext<INavigationMobileContextValues | undefined>(undefined)
//* ===========================================================================

//* ===========================================================================
//* 4.- Create the Provider
//* ===========================================================================
function NavigationMobileProvider({ children }: INavigationMobileProviderProps) {
  const [navigationMobileIsOpen, setNavigationMobileIsOpen] = useState<boolean>(false)

  const openNavigationMobile = () => setNavigationMobileIsOpen(isOpen => (isOpen = true))
  const closeNavigationMobile = () => setNavigationMobileIsOpen(isOpen => (isOpen = false))
  const toggleNavigationMobile = () => setNavigationMobileIsOpen(isOpen => (isOpen = !isOpen))

  const data: INavigationMobileContextValues = {
    navigationMobileIsOpen,
    openNavigationMobile,
    closeNavigationMobile,
    toggleNavigationMobile
  }

  return (
    <NavigationMobileContext.Provider value={data}>{children}</NavigationMobileContext.Provider>
  )
}
//* ===========================================================================

//* ===========================================================================
//* 5.- Create useShoppingCartContext
//* ===========================================================================
function useNavigationMobileContext() {
  const context = useContext(NavigationMobileContext)

  if (context === undefined) {
    throw Error('Error: useNavigationMobileContext, must be used within a NavigationMobileProvider')
  }

  return context
}
//* ===========================================================================

//* ===========================================================================
//* 6.- Export
//* ===========================================================================
export { NavigationMobileProvider, useNavigationMobileContext }
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
