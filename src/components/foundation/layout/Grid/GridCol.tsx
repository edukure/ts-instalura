import styled, { css, CSSProperties } from 'styled-components';
import { BreakpointsStyles } from '../../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../../theme/utils/propToStyle';

interface ColProps {
  offset?: number | BreakpointsStyles<number>;
  value: number | BreakpointsStyles<number>;
  display?: CSSProperties['display'] | BreakpointsStyles<CSSProperties['display']>;
  flexDirection?:
    | CSSProperties['flexDirection']
    | BreakpointsStyles<CSSProperties['flexDirection']>;
  alignItems?: CSSProperties['alignItems'] | BreakpointsStyles<CSSProperties['alignItems']>;
  justifyContent?:
    | CSSProperties['justifyContent']
    | BreakpointsStyles<CSSProperties['justifyContent']>;
}

const Col = styled.div<ColProps>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${propToStyle('value', (value: number) => {
    return css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
  })}

  ${propToStyle('offset', (offsetValue: number) => {
    return {
      marginLeft: `${(100 * offsetValue) / 12}%`,
    };
  })}

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
`;

export default Col;