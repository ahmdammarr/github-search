export function toRem(pixel: number, rootFontSize = 16) {
    return `${pixel / rootFontSize}rem`;
  }