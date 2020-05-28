import styled, { css, createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    black: '#000',
    darkGrey: '#555555',
    lightGrey: '#f5f5f5',
    grey: '#aaaaaa',
    white: '#ffffff',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body {
    color: ${theme.color.black};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    padding-top: 24px;
  }
  
  h1 {
    color: ${theme.color.black};
    font-size: 24px;
    margin: 0 0 16px;

    @media (min-width: ${theme.screens.sm}) {
      font-size: 32px;
    }

    span {
      text-transform: capitalize;
    }
  
    &:hover {
      color: ${theme.color.black};
    }
  }

  h2,
  p {
    margin: 0 0 16px;

    &:last-child {
      margin: 0;
    }
  }
`;

export const display = css`
  display: ${(props) => (props.block && 'block') || (props.flex && 'flex')};
`;

export const flex = css`
  ${(props) =>
    props.flexWrap &&
    css`
      flex-wrap: wrap;
    `}
`;

export const fontWeight = css`
  font-weight: ${(props) =>
    (props.bold && 'bold') || (props.normal && 'normal')};
`;

export const fontSize = css`
  font-size: ${(props) =>
    (props.fontLarge && '24px') ||
    (props.fontMedium && '17px') ||
    (props.fontSmall && '14px')};
`;

export const marginBottom = css`
  margin-bottom: ${(props) =>
    (props.marginBottomLarge && '24px') ||
    (props.marginBottomMedium && '16px') ||
    (props.marginBottomSmall && '8px')};
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (min-width: ${theme.screens.sm}) {
    max-width: ${theme.screens.sm};
  }

  @media (min-width: ${theme.screens.md}) {
    max-width: ${theme.screens.md};
  }

  @media (min-width: ${theme.screens.lg}) {
    max-width: ${theme.screens.lg};
  }
`;

export const Column = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${theme.color.grey};
  font-size: 14px;
  height: 48px;
  outline: none;
  padding-left: 16px;
  width: 100%;
  ${marginBottom}

  @media (min-width: ${theme.screens.sm}) {
    width: 400px;
  }

  &:focus {
    border: 2px solid ${theme.color.darkGrey};
  }
`;

export const Label = styled.label`
  ${display}
  ${fontWeight}
  ${marginBottom}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Submit = styled.input`
  background: ${theme.color.black};
  border: none;
  border-radius: 8px;
  color: ${theme.color.white};
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  ${display}
  ${marginBottom}

  &:hover,
  &:focus {
    background: ${theme.color.darkGrey};
  }
`;
