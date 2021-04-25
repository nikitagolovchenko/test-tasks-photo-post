import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({theme: {spacing}}) => spacing.sm};
  padding-bottom: ${({theme: {spacing}}) => spacing.sm};
  color: ${({theme: {colors}}) => colors.gray};
  border-top: 1px solid ${({theme: {colors}}) => colors.gray};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>&copy; 2021. Nikita Golovchenko</p>
    </FooterStyled>
  );
};

export default Footer;
