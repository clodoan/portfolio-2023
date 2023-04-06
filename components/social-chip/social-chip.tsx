import { borderRadius, spacing } from '@/styles';
import {
  FigmaLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import ReadCVIcon from '../icons/read-cv';
import Typography from '../typography';

type SocialChipProps = {
  href: string;
  name:
    | 'github'
    | 'linkedin'
    | 'twitter'
    | 'instagram'
    | 'facebook'
    | 'youtube'
    | 'twitch'
    | 'spotify'
    | 'figma'
    | 'read-cv';
};

const handleIcon = (name: string) => {
  switch (name) {
    case 'github':
      return <GitHubLogoIcon />;
    case 'linkedin':
      return <LinkedInLogoIcon />;
    case 'twitter':
      return <TwitterLogoIcon />;
    case 'figma':
      return <FigmaLogoIcon />;
    case 'read-cv':
      return <StyledReadCVIcon />;
    default:
      return <GitHubLogoIcon />;
  }
};

const handleLabel = (name: string) => {
  switch (name) {
    case 'github':
      return 'GitHub';
    case 'linkedin':
      return 'LinkedIn';
    case 'twitter':
      return 'Twitter';
    case 'figma':
      return 'Figma';
    case 'read-cv':
      return 'Read CV';
    default:
      return 'GitHub';
  }
};

const SocialChip = ({ href, name }: SocialChipProps) => {
  return (
    <Container href={href} target="_blank">
      {handleIcon(name)}
      <Typography variant="body-2" color="secondary">
        {handleLabel(name)}
      </Typography>
    </Container>
  );
};

const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadius.full};
    background-color: ${theme.background.primary};
    border: 1px solid ${theme.border.primary};
    padding: ${spacing[1]} ${spacing[2]};
    gap: ${spacing[2]};
    transition: all 0.2s ease-in-out;

    svg {
      color: ${theme.text.tertiary};
    }
    path {
      fill: ${theme.text.tertiary} !important;
    }

    &:hover {
      background-color: ${theme.background.primary};
      border: 1px solid ${theme.border.tertiary};
    }
  `}
`;

const StyledReadCVIcon = styled(ReadCVIcon)`
  ${({ theme }) => css`
    && svg {
      width: 10px !important;
      height: 10px !important;

      path {
        fill: ${theme.text.tertiary} !important;
      }
    }
  `}
`;

export default SocialChip;
