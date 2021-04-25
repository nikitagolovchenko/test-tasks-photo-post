import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  position: absolute;
  z-index: 5;
  padding: 0;
  top: ${({theme: {spacing}}) => spacing.sm};
  right: ${({theme: {spacing}}) => spacing.sm};
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity ${({theme: {transition}}) => transition.duration} ${({theme: {transition}}) => transition.timig};
  &:hover {
    opacity: 0.5;
  }
`;

const CloseBtn = ({close, title}) => {
  return (
    <Btn onClick={close} title={title}>
      <img src="/images/close.svg" alt="close"/>
    </Btn>
  )
}

export default CloseBtn
