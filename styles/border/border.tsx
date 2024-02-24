import { BorderRadius, BorderWidth } from './border-types';

const radius: BorderRadius = {
  none: '0',
  small: '4px',
  medium: '6px',
  large: '12px',
  full: '500px',
};

const width: BorderWidth = {
  none: '0',
  small: '1px',
  medium: '2px',
  large: '4px',
};

const border = {
  radius,
  width,
};

export default border;
