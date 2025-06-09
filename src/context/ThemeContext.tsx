import React, { createContext, useContext } from 'react'

type ThemeContextType = {
  setPrimaryGradient: (gradient: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const setPrimaryGradient = (gradient: string) => {
    document.documentElement.style.setProperty('--gradient-primary', gradient)
  }

  return (
    <ThemeContext.Provider value={{ setPrimaryGradient }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
