import Typography from '@/components/typography/typography';
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
      <StyledLink href={href} asChild>
        <Link href={href}>
          <Typography variant="label-2">{children}</Typography>
        </Link>
      </StyledLink>
    </Container>
  );
};

const Container = styled(NavigationMenu.Item)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${theme.text.primary};
    z-index: 1;
  `};
`;

const StyledLink = styled(NavigationMenu.Link)`
  ${({ theme }) => css`
    text-decoration: none;
    z-index: 2;
    padding: ${spacing[2]} ${spacing[3]};
    border-radius: ${borderRadius.full};

    &:active {
      color: ${theme.text.primary};
    }

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  `};
`;

export default NavItem;
