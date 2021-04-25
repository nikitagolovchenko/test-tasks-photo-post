import React from 'react';
import Grid from '../ui/Grid';
import GridItem from '../ui/GridItem';
import PhotoPreview from './PhotoPreview';

const PhotoList = ({ posts }) => {
  return (
    <Grid>
      {posts.map((post) => (
        <GridItem key={post.id}>
          <PhotoPreview {...post} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotoList;
