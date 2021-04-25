import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  margin-bottom: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.sm};
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Photo posts test app</h1>
    </HeaderStyled>
  )
}

export default Header
