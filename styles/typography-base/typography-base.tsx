const FACTOR = 1.25;

const typographyBase = {
  fontFamily: {
    body: "'Mulish', 'sans-serif'",
    serif: "'Cormorant', serif",
    heading: "'Mulish', 'sans-serif'",
  },
  fontWeight: {
    bold: 600,
    semibold: 500,
    regular: 400,
  },
  fontSize: {
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
