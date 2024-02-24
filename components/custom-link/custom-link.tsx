import Link from 'next/link';
import type { LinkProps } from 'next/link';
import React from 'react';
import type { HTMLAttributeAnchorTarget } from 'react';

export type CustomLinkProps = {
  children: React.ReactNode;
  href: string;
  target: HTMLAttributeAnchorTarget;
} & LinkProps;

const CustomLink = ({ children, href, target }: CustomLinkProps) => {
  return (
    <Link href={href} target={target ? '_blank' : '_self'} passHref>
      {children}
    </Link>
  );
};

export default CustomLink;
