import Layout from '@/components/layout';
import { Theme } from '@/components/theme-changer/components/themes-list/themes-list';
import ThemeChanger from '@/components/theme-changer/theme-changer';
import { GlobalStyle } from '@/styles';
import { purpleTheme } from '@/styles/colors';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(purpleTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ThemeChanger onValueChange={(value) => setTheme(value)} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
