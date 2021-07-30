import { ApplyStyleToBreakpoint, breakpointsMediaQuery, cssByBreakpoints } from './breakpointsMediaQuery';

import { CSSProperties } from 'react';

/*
  Por padrão, a função applyStyleToBreakpoint irá associar à propriedade CSS ao nome da prop.
  Ou seja, quando a prop tiver o nome EXATAMENTE IGUAL à propriedade CSS que ela irá modificar,
  não é necessário o uso dessa função

  Exemplo: no componente Button, propToStyle("display") dispensa o uso da applyStyleToBreakpoint, pois
  o CSS aplicado será display: valor (nome da prop === propriedade CSS)

  Em casos onde a propriedade CSS alterda difere do nome da prop, a applyStyleToBreakpoint se torna
  necessária para que o código saiba quais propriedades alterar

  Exemplo: usar "offset" como propriedade faz sentido em Grid, porém a propriedade CSS alterada na verdade
  é o margin-left, então através da applyStyleToBreakpoint podemos informar que esta propriedade será mudada
  em cada breakpoint

  ${propToStyle('offset', // indica o nome da prop
    // função de callback que determina quais estilos e como serão modificados
    (offsetValue: number) => {
    return {
      marginLeft: `${(100 * offsetValue) / 12}%`,
    };
  })}

  applyStyleToBreakpoint também pode retornar um css`` do styled-componets

  ${propToStyle('offset', // indica o nome da prop
  // função de callback que determina quais estilos e como serão modificados
    (offsetValue: number) => {
    return css`
      margin-left: `${(100 * offsetValue) / 12}%`
    `
  })}
  
*/

export const propToStyle = (propName: string, applyStyleToBreakpoint?: ApplyStyleToBreakpoint) => {
  return (props) => {
    if (!props[propName]) return;

    const propValue = props[propName];

    // conversão de prop simples sem responsividade
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      if (!applyStyleToBreakpoint) {
        //  função padrão que apenas associa a chave CSSProperty com seu valor
        applyStyleToBreakpoint = (value) => {
          return { [propName]: value };
        };
      }

      const stylesByBreakpoints = cssByBreakpoints(propValue, applyStyleToBreakpoint);
      return breakpointsMediaQuery(stylesByBreakpoints);
    }

    return {
      [propName]: props[propName],
    };
  };
};

// export const propToStyle = (
//   propName: keyof CSSProperties
// ) => {
//   return (props) => {

//     if(!props[propName]) return;

//     const propValue = props[propName];

//     // conversão de prop simples sem responsividade
//     if (typeof propValue === 'string' || typeof propValue === 'number') {
//       return {
//         [propName]: props[propName],
//       };
//     }

//     if (typeof propValue === 'object') {
//       //  função padrão que apenas associa a chave CSSProperty com seu valor
//       const applyStyleToBreakpoint = (value) => {
//         return { [propName]: value };
//       };

//       const stylesByBreakpoints = cssByBreakpoints(propValue, applyStyleToBreakpoint);
//       return breakpointsMediaQuery(stylesByBreakpoints);
//     }

//     return {
//       [propName]: props[propName],
//     };
//   };
// };
