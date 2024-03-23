import type { MDXComponents } from 'mdx/types';
import { AnchorHTMLAttributes } from 'react';

import Typography from '../typography';

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    p: ({ children }) => <Typography variant="body-1">{children}</Typography>,
    h1: ({ children }) => (
      <Typography variant="heading-1">{children}</Typography>
    ),
  };
};

export default useMDXComponents;
