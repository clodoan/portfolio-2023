import { Inter, Source_Serif_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});
const source_serif_pro = Source_Serif_Pro({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const FACTOR = 1.25;

export const typographyBase = {
  fontFamily: {
    body: `${inter.style.fontFamily}, 'serif'`,
    heading: `${source_serif_pro.style.fontFamily}, 'serif'`,
  },
  fontWeight: {
    heading: {
      bold: 700,
      semibold: 600,
      regular: 400,
    },
    body: {
      bold: 700,
      semibold: 550,
      regular: 400,
    },
  },
  fontSize: {
    0: '0.75rem',
    1: '0.875rem',
    2: '1rem',
    3: '1.125rem',
    4: '1.25rem',
    5: '1.5rem',
    6: '1.875rem',
    7: '2.25rem',
    8: '3rem',
    9: '3.75rem',
    10: '4.5rem',
  },
  lineHeight: {
    0: `calc(.75rem * ${FACTOR})`,
    1: `calc(.875rem * ${FACTOR})`,
    2: `calc(1rem * ${FACTOR})`,
    3: `calc(1.125rem * ${FACTOR})`,
    4: `calc(1.25rem * ${FACTOR})`,
    5: `calc(1.5rem * ${FACTOR})`,
    6: `calc(1.875rem * ${FACTOR})`,
    7: `calc(2.25rem * ${FACTOR})`,
    8: `calc(3rem * ${FACTOR})`,
    9: `calc(3.75rem * ${FACTOR})`,
    10: `calc(4.5rem * ${FACTOR})`,
  },
};
