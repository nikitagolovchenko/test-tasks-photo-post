import React from 'react';
import styled, { css } from 'styled-components';

const BtnCss = styled.button`
  appearance: none;
  cursor: pointer;
  width: ${props => (props.width ? props.width : 'auto')};
  transition: all ${({ theme: { transition } }) => transition.duration} ${({ theme: { transition } }) => transition.timing};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray};
    color: ${({ theme: { colors } }) => colors.white};
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${({ theme: { colors } }) => colors.primary};
      border-color: ${({ theme: { colors } }) => colors.primary};
      color: ${({ theme: { colors } }) => colors.white};
      &:hover {
        background-color: ${({ theme: { colors } }) => colors.primaryActive};
        border-color: ${({ theme: { colors } }) => colors.primaryActive};
        color: ${({ theme: { colors } }) => colors.white};
      }
    `}
`;

const Btn = ({ text, ...props }) => {
  return <BtnCss {...props} type={props.type | 'button'}>{text}</BtnCss>;
};

export default Btn;
