import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/styles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles/colors'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}> Toggle Theme </button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
