import { toRem } from "@app/utils/to-rem";

const lineHeights = {
  "2xs": toRem(16),
  xs: toRem(24),
  sm: toRem(28),
  md: toRem(32),
  lg: toRem(36),
  xl: toRem(40),
  "2xl": toRem(44),
  "3xl": toRem(48),
  "4xl": toRem(64),
  "5xl": toRem(80),
  "6xl": toRem(92),
};

const fontSizes = {
  "2xs": toRem(12),
  xs: toRem(16),
  sm: toRem(20),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(36),
  "2xl": toRem(40),
  "3xl": toRem(48),
  "4xl": toRem(64),
  "5xl": toRem(80),
};

const letterSpacings = {
  "2xs": "-0.02em",
  xs: "-0.015em",
  sm: "-0.01em",
  md: "-0.005em",
  lg: "0",
  xl: "0.005em",
  "2xl": "0.01em",
};

const fonts = {
  heading: "sans-serif",
  body: "cairo",
};

export const typography = {
  letterSpacings,
  lineHeights,
  fonts,
  fontSizes,
};
