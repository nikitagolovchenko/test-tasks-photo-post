import styled from 'styled-components';

const OverlayCss = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme: {colors}}) => colors.dark};
  opacity: 0.8;
`;

const Overlay = () => {
  return (
    <OverlayCss/>
  )
}

export default Overlay;
