import { css } from 'styled-components';

import defaultTheme, { Theme } from '../index';
import { TypographyVariants } from '../typographyVariants';

export const typographyVariantToStyle = (variant: keyof TypographyVariants, theme?: Theme) => {
  if (!theme) theme = defaultTheme;

  const { fontSize, fontWeight, lineHeight } = theme.typographyVariants[variant];

  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};
