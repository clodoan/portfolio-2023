import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

const typography = {
  fontFamily: {
    body: inter.className,
  },
  fontWeight: {
    regular: 400,
    medium: 550,
    bold: 650,
  },
  fontSize: {
    0: "0.75rem",
    1: "0.875rem",
    2: "1rem",
    3: "1.125rem",
    4: "1.25rem",
    5: "1.5rem",
    6: "1.875rem",
    7: "2.25rem",
    8: "3rem",
    9: "3.75rem",
    10: "4.5rem",
  },
};

export default typography;
