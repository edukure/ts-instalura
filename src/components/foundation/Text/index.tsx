import styled, { css, CSSProperties } from 'styled-components';

import { TypographyVariants } from '../../../theme/typographyVariants';
import { BreakpointsStyles } from '../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../theme/utils/propToStyle';

interface TextProps {
  variant?: keyof TypographyVariants;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span';
  textAlign?: CSSProperties['textAlign'] | BreakpointsStyles<CSSProperties['textAlign']>;
}

const Text = styled.span<TextProps>`
  ${({ as }) => {
    if (as === 'a') {
      return css`
        cursor: pointer;
      `;
    }
  }}

  ${propToStyle('textAlign')}
`;

Text.defaultProps = {
  as: 'span',
  variant: 'paragraph1',
};

export default Text;
