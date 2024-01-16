import type { MDXComponents } from 'mdx/types';
import { AnchorHTMLAttributes } from 'react';

import CustomLink from '../custom-link';
import Typography from '../typography';

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    p: ({ children }) => <Typography variant="body-1">{children}</Typography>,
    h1: ({ children }) => (
      <Typography variant="heading-1">{children}</Typography>
    ),
  };
};

export default useMDXComponents;
