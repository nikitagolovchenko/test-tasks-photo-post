import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Img from '../ui/Img';

const PhotoStyled = styled.div`
  display: block;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  &:hover {
    Img {
      transform: scale(1.1);
    }
  }
`;

const PhotoPreview = ({id, url}) => {

  return (
    <PhotoStyled as={Link} to={`/modal/${id}`} >
      <Img src={url}/>
    </PhotoStyled>
  );
};

export default PhotoPreview;
