import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import NavItem from './components/nav-item/nav-item';

export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/work">Work</NavItem>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);
