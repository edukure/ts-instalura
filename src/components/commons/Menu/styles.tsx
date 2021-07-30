import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../theme/utils/breakpointsMediaQuery';
import { typographyVariantToStyle } from '../../../theme/utils/typographyVariantToStyle';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;

  ${breakpointsMediaQuery({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export const LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;

  ${breakpointsMediaQuery({
    md: css`
      width: 131px;
      height: 32px;
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

export const Central = styled.div`
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

  ${breakpointsMediaQuery({
    md: css`
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin-left: 16px;
      margin-right: 16px;
      margin-top: 14px;
    `,
    lg: css`
      max-width: 360px;
      margin-left: 32px;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;

    ${({ theme }) =>
      breakpointsMediaQuery({
        xs: typographyVariantToStyle('smallestException', theme),
        md: typographyVariantToStyle('paragraph1', theme),
      })}

    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

export const RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;

  ${breakpointsMediaQuery({
    md: css`
      order: initial;
    `,
  })}
`;
