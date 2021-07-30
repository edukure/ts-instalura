import { css, FlattenSimpleInterpolation, CSSProperties } from 'styled-components';

import { Breakpoints, breakpoints } from '../breakpoints';

/* FlattenSimpleInterpolation => resultado de css``
   { [cssProperty in keyof CSSProperties]: number | string } => objeto contendo por exemplo
   {
     textAlign: "center",
     width: "100%"
   }
*/
export type BreakpointsStyles<
  T =
    | FlattenSimpleInterpolation
    | { [cssProperty in keyof CSSProperties]: CSSProperties[cssProperty] }
    | number
    | string
> = {
  [breakpoint in keyof Breakpoints]?: T;
};

export const breakpointsMediaQuery = (cssByBreakpoints: BreakpointsStyles) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  const query = breakpointsNames.map((name) => {
    return css`
      @media screen and (min-width: ${breakpoints[name]}px) {
        ${cssByBreakpoints[name]}
      }
    `;
  });

  return query;
};

export interface ApplyStyleToBreakpoint {
  (cssValue: number | string):
    | FlattenSimpleInterpolation
    | { [cssProperty in keyof CSSProperties]: CSSProperties[cssProperty] };
}

/*
  A função applyCssToBreakpoint será aplicada em cada breakpoint informada nas props.

  Exemplo 1: Considerando a função: (value) => css`margin: ${value};`
  e a prop margin = {xs: "auto", md: "0 10px"}
  o resultado será: 
    "margin: auto;" e "margin: 0 10px;"
  
  A função também pode retornar um objeto com CSSProperties
  Exemplo 2: Considerando a função: (value) => { margin: value };
  e a prop margin = {xs: "auto", md: "0 10px"}
  o resultado será: 
    {margin: "auto"} e {margin: "0 10px"}


  O reduce criará um objeto novo e associará o resultado de applyCssToBreakpoint
  a seu respectivo breakpoint
  
  O objeto final breakpointsWithStyles terá a seguinte forma utilizando os exemplos acima:
  1 - {xs: margin: "auto", md: "margin: 0 10px"}
  2 - {xs: {margin: "auto"}, md: {margin: "0 10px"}}
*/
export const cssByBreakpoints = (
  styleObject: BreakpointsStyles,
  applyStyleToBreakpoint?: ApplyStyleToBreakpoint
) => {
  const breakpoints = Object.keys(styleObject);

  // cria um novo objeto vazio {} e
  // aplica a função applyStyleToBreakpoint passada como parâmetro para cada breakpoint
  // Exemplo: {xs: 0, md: 5} => {xs: applyStyleToBreakpoint(0), md: applyStyleToBreakpoint(5)}
  const breakpointsWithStyles = breakpoints.reduce((obj, currentBreakpoint, index) => {
    if (applyStyleToBreakpoint && typeof applyStyleToBreakpoint === 'function') {
      obj[currentBreakpoint] = applyStyleToBreakpoint(styleObject[currentBreakpoint]);
    } else {
      obj[currentBreakpoint] = styleObject[currentBreakpoint];
    }
    return obj;
  }, {} as BreakpointsStyles);

  return breakpointsWithStyles;
};
