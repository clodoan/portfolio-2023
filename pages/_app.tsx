import ThemeChanger from '@/components/theme-changer/theme-changer';
import { GlobalStyle } from '@/styles';
import { lightTheme } from '@/styles/colors';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeChanger onValueChange={(value) => setTheme(value.key)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
