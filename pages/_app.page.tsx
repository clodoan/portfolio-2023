import Layout from '@/components/layout';
import Navigation from '@/components/navigation/navigation';
import ThemeChanger from '@/components/theme-changer/theme-changer';
import { GlobalStyle } from '@/styles';
import { greenTheme } from '@/styles/colors';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(greenTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ThemeChanger onValueChange={(value) => setTheme(value)} />
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
