//* ///////////////////////////////////////////////////////////////////////////
//* Global Contexts Providers
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
'use client'

import { ReactNode } from 'react'
import { ShoppingCartProvider, NavigationMobileProvider } from '@/contexts'
import { SessionProvider } from 'next-auth/react'
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- IGlobalContextsProvidersProps
//* ---------------------------------------------------------------------------
interface IGlobalContextsProvidersProps {
  children: ReactNode
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the Provider
//* ===========================================================================
function GlobalContextsProviders({ children }: IGlobalContextsProvidersProps) {
  return (
    <SessionProvider>
      <ShoppingCartProvider>
        <NavigationMobileProvider>{children}</NavigationMobileProvider>
      </ShoppingCartProvider>
    </SessionProvider>
  )
}
//* ===========================================================================

//* ===========================================================================
//* 4.- Export
//* ===========================================================================
export { GlobalContextsProviders }
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
