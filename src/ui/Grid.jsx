import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme: { spacing } }) => spacing.sm};
  margin-right: ${({ theme: { spacing } }) => spacing.sm};
`;

export default Grid;
