import styled, { css, CSSProperties } from 'styled-components';
import get from 'lodash/get';

import { Theme } from '../../../theme';
import {
  breakpointsMediaQuery,
  BreakpointsStyles,
} from '../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { typographyVariantToStyle } from '../../../theme/utils/typographyVariantToStyle';

interface ButtonProps {
  ghost?: boolean;
  variant?: keyof typeof ButtonVariants; // weird stuff lol
  // variant?: "primary.main" | "secondary.main" | "tertiary.main" | "tertiary.light";
  theme?: Theme;
  margin?: CSSProperties['margin'] | BreakpointsStyles<CSSProperties['margin']>;
  display?: CSSProperties['display'] | BreakpointsStyles<CSSProperties['display']>;
}

const ButtonGhost = css<ButtonProps>`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css<ButtonProps>`
  color: white;
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastColor`);
  }};
`;

enum ButtonVariants {
  'primary.main',
  'secondary.main',
  'tertiary.main',
  'tertiary.light',
}

const Button = styled.button<ButtonProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${({ theme }) =>
    breakpointsMediaQuery({
      xs: typographyVariantToStyle('smallestException', theme),
      md: typographyVariantToStyle('paragraph1', theme),
    })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
