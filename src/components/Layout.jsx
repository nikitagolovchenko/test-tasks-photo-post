import React from 'react';
import styled from 'styled-components';
import GlobalCss from '../ui/GlobalCss';
import Footer from './Footer';
import Header from './Header';

const LayoutStyled = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-left: ${props => props.theme.spacing.md};
  padding-right: ${props => props.theme.spacing.md};
  
  main {
    flex-grow: 1;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <GlobalCss />
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
