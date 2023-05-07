import React from 'react';

import DesktopThemeChanger from './components/desktop-theme-changer';
import MobileThemeChanger from './components/mobile-theme-changer';
import { Theme } from './components/themes-list/themes-list';

type ThemeChangerProps = {
  onValueChange: (value: Theme) => void;
};

const ThemeChanger = ({ onValueChange }: ThemeChangerProps) => {
  return (
    <>
      <MobileThemeChanger onValueChange={onValueChange} />
      <DesktopThemeChanger onValueChange={onValueChange} />
    </>
  );
};

export default ThemeChanger;
