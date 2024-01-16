const FACTOR = 1.25;

const typographyBase = {
  fontFamily: {
    body: "'Rubik', 'sans-serif'",
    heading: "'Rubik', 'sans-serif'",
  },
  fontWeight: {
    heading: {
      bold: 700,
      semibold: 600,
      regular: 400,
    },
    body: {
      bold: 700,
      semibold: 600,
      regular: 500,
    },
  },
  fontSize: {
    0: '0.875rem',
    1: '1rem',
    2: '1.125rem',
    3: '1.25rem',
    4: '1.5rem',
    5: '1.875rem',
    6: '2.25rem',
    7: '3rem',
    8: '3.75rem',
    9: '4.5rem',
    10: '6rem',
  },
  lineHeight: {
    1: `calc(1 * ${FACTOR})`,
    2: `calc(1.125 * ${FACTOR})`,
    3: `calc(1.25 * ${FACTOR})`,
    4: `calc(1.5 * ${FACTOR})`,
    5: `calc(1.875 * ${FACTOR})`,
    6: `calc(2.25 * ${FACTOR})`,
    7: `calc(3 * ${FACTOR})`,
    8: `calc(3.75 * ${FACTOR})`,
    9: `calc(4.5 * ${FACTOR})`,
    10: `calc(6 * ${FACTOR})`,
  },
};

export default typographyBase;
