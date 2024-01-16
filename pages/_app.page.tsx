import { GlobalStyle } from '@/styles';
import { light } from '@/styles/themes';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import components from '../components/mdx-base-components/mdx-base-components';

export default function App({ Component, pageProps }: AppProps) {
  const theme: DefaultTheme = light;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
        />
      </Head>
      <GlobalStyle />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
