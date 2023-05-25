import { borderRadius, spacing } from '@/styles';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styled, { css } from 'styled-components';

type NavItemProps = {
  href: string;
  children: string;
};

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Container>
      <NavigationMenu.Link asChild>
        <Link href={href}>{children}</Link>
      </NavigationMenu.Link>
    </Container>
  );
};

const Container = styled(NavigationMenu.Item)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: ${spacing[2]} ${spacing[3]};
    border-radius: ${borderRadius.full};
    background-color: ${theme.background.primary};
    color: ${theme.text.primary};
  `};
`;

export default NavItem;
