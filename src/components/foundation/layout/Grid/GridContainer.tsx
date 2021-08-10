import styled, { css, CSSProperties } from 'styled-components';
import {
  breakpointsMediaQuery,
  BreakpointsStyles,
} from '../../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../../theme/utils/propToStyle';

interface ContainerProps {
  marginTop?: CSSProperties['marginTop'] | BreakpointsStyles<CSSProperties['marginTop']>;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${breakpointsMediaQuery({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('marginTop')}
`;

export default Container;
