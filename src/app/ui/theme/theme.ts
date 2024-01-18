import { DeepPartial, extendTheme, Theme } from '@chakra-ui/react';
import {colors} from './colors'
import {typography} from './typography'
export const theme: DeepPartial<Theme> = extendTheme({
    typography,
    colors
});
