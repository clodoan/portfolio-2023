import { Inter, Source_Serif_Pro } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})
const source_serif_pro = Source_Serif_Pro({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

const FACTOR = 1.25

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
    0: `.75rem * ${FACTOR}`,
    1: `.875rem * ${FACTOR}`,
    2: `1rem * ${FACTOR}`,
    3: `1.125rem * ${FACTOR}`,
    4: `1.25rem * ${FACTOR}`,
    5: `1.5rem * ${FACTOR}`,
    6: `1.875rem * ${FACTOR}`,
    7: `2.25rem * ${FACTOR}`,
    8: `3rem * ${FACTOR}`,
    9: `3.75rem * ${FACTOR}`,
    10: `4.5rem * ${FACTOR}`,
  },
}

export const typography = {
  'heading-1': {
    fontFamily: typographyBase.fontFamily.heading,
    fontWeight: typographyBase.fontWeight.heading.bold,
    fontSize: typographyBase.fontSize[10],
    lineHeight: typographyBase.lineHeight[10],
  },
  'heading-2': {
    fontFamily: typographyBase.fontFamily.heading,
    fontWeight: typographyBase.fontWeight.heading.bold,
    fontSize: typographyBase.fontSize[9],
    lineHeight: typographyBase.lineHeight[9],
  },
  'heading-3': {
    fontFamily: typographyBase.fontFamily.heading,
    fontWeight: typographyBase.fontWeight.heading.bold,
    fontSize: typographyBase.fontSize[8],
    lineHeight: typographyBase.lineHeight[8],
  },
  'body-1': {
    fontFamily: typographyBase.fontFamily.body,
    fontWeight: typographyBase.fontWeight.body.regular,
    fontSize: typographyBase.fontSize[2],
    lineHeight: typographyBase.lineHeight[2],
  },
  'body-2': {
    fontFamily: typographyBase.fontFamily.body,
    fontWeight: typographyBase.fontWeight.body.regular,
    fontSize: typographyBase.fontSize[3],
    lineHeight: typographyBase.lineHeight[3],
  },
  'body-3': {
    fontFamily: typographyBase.fontFamily.body,
    fontWeight: typographyBase.fontWeight.body.regular,
    fontSize: typographyBase.fontSize[4],
    lineHeight: typographyBase.lineHeight[4],
  },
}
