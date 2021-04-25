import styled from 'styled-components';

const GridItem = styled.div`
  width: 100%;
  padding-left: ${({ theme: { spacing } }) => spacing.sm};
  padding-right: ${({ theme: { spacing } }) => spacing.sm};
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};

  @media screen and (${({theme: {media}}) => media.tablet}) {
    width: 33.33333%;
  }
`;

export default GridItem;
