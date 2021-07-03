import React from 'react'
import { createContext } from 'react'
import defaultTheme from './defaultTheme'

interface ThemeContextInterface {
  theme?: any
  mode?: 'light' | 'dark'
  toggleMode?: any
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
  mode: 'light',
  toggleMode: true,
})

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value,
}) => {
  console.log('defaultTheme', defaultTheme)
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
