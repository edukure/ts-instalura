import styled, { css, CSSProperties } from 'styled-components';
import {
  breakpointsMediaQuery,
  BreakpointsStyles,
  cssByBreakpoints,
} from '../../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../../theme/utils/propToStyle';


interface ContainerProps {
  marginTop?: CSSProperties["marginTop"] | BreakpointsStyles<CSSProperties["marginTop"]>;
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

  ${propToStyle("marginTop")}
`;

interface ColProps {
  offset?: number | BreakpointsStyles<number>;
  value: number | BreakpointsStyles<number>;
  display?: CSSProperties["display"] | BreakpointsStyles<CSSProperties["display"]>;
  flexDirection?: CSSProperties["flexDirection"] | BreakpointsStyles<CSSProperties["flexDirection"]>;
  alignItems?: CSSProperties["alignItems"] | BreakpointsStyles<CSSProperties["alignItems"]>;
  justifyContent?: CSSProperties["justifyContent"] | BreakpointsStyles<CSSProperties["justifyContent"]>;
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

  ${propToStyle("display")}
  ${propToStyle("flexDirection")}
  ${propToStyle("alignItems")}
  ${propToStyle("justifyContent")}
`;

/* ${({ value }) => {
    if (!value) return; // necessário para garantir que há um objeto/valor

    const valueToCss = (value) => {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    };

    if (typeof value === 'number') {
      return valueToCss(value);
    }

    if (typeof value === 'object') {
      const valuesByBreakpoints = cssByBreakpoints(value, valueToCss);
      return breakpointsMediaQuery(valuesByBreakpoints);
    }
  }} */

// ${({ offset }) => {
//   if (!offset) return; // necessário para garantir que há um objeto/valor

//   const offsetToCss = (offsetValue) => {
//     return css`
//       margin-left: ${(100 * offsetValue) / 12}%;
//     `;
//   };

//   if (typeof offset === 'number') {
//     return offsetToCss(offset);
//   }

//   if (typeof offset === 'object') {
//     const offsetsByBreakpoints = cssByBreakpoints(offset, offsetToCss);
//     return breakpointsMediaQuery(offsetsByBreakpoints);
//   }
// }}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

export default {
  Container,
  Row,
  Col,
};
