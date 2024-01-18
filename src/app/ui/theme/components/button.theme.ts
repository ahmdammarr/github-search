import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    py: "3xs",
    borderRadius: "base",
    textAlign: "center",
    whiteSpace: "normal",
    fontWeight: "regular",
    _active: {
      transform: "scale(0.95)",
    },
  },
  sizes: {
    sm: {
      height: "initial",
      fontSize: "sm",
      px: "xs",
    },
    md: {
      height: "initial",
      fontSize: "sm",
      px: "xs",
    },
    lg: {
      height: "initial",
      fontSize: "sm",
      lineHeight: "sm",
      px: "xs",
    },
  },
  variants: {
    primary: {
      color: "brand.500",
      backgroundColor: "brand.300",
      _hover: {
        backgroundColor: "brand.200",
      },
      _focus: {
        border: "1px solid",
        borderColor: "brand.500",
        boxShadow: "0 0 0 1px white inset",
      },
      _disabled: {
        backgroundColor: "brand.400",
        color: "brand.100",
        pointerEvents: "none",
        opacity: 1,
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
};
