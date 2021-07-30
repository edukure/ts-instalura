import { Colors, colors } from "./colors";
import { TypographyVariants, typographyVariants } from "./typographyVariants";
import { Breakpoints, breakpoints } from "./breakpoints";


export interface Theme {
    colors: Colors,
    typographyVariants: TypographyVariants,
    breakpoints: Breakpoints,
    borderRadius: string,
    transition: string,
    fontFamily: string,
}

const theme: Theme = {
    colors,
    typographyVariants,
    breakpoints,
    borderRadius: '8px',
    transition: '200ms ease-in-out',
    fontFamily: '\'Rubik\', sans-serif',
};

export default theme;