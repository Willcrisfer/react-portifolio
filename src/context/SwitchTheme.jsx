import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.body.classList.add(theme)
    if (theme == 'dark') {
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const contextValue = { theme, setTheme }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}
export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}