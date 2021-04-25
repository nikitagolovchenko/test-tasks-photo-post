import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
  *,*::before,::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  };
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.dark};
  };
  p {
    margin-bottom: ${props => props.theme.spacing.sm};
    &:last-child {
      margin-bottom: 0;
    }
  };
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: ${props => props.theme.spacing.sm};
    &:last-child {
      margin-bottom: 0;
    }
  };
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.primaryActive};
    }
  };
  img {
    max-width: 100%;
  };
  input,button, textarea {
    padding: 10px 12px;
    border-radius: 3px;
    border: 1px solid ${({theme: {colors}}) => colors.gray};
    background-color: transparent;
    font-size: 16px;
    &::placeholder {
      color: ${({theme: {colors}}) => colors.gray};
    }
  };
  input,textarea {
    width: 100%;
    max-height: 250px;
  };
  .modal-active {
    overflow: hidden;
  }
`;

export default GlobalCss;
