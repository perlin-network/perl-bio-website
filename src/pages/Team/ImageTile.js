import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

import MediaGridItem from '../../components/MediaGridItem';
import DetailsGridItem from '../../components/DetailsGridItem';

export default function ImageTile({ src, alt, inverted, children }) {
  return (
    <Grid container>
      <Media inverted={inverted}>
        <img src={src} alt={alt} />
      </Media>
      <Details inverted={inverted}>{children}</Details>
    </Grid>
  );
}

const Media = styled(MediaGridItem)({
  minHeight: 360,
});

const Details = styled(DetailsGridItem)(({ theme }) => ({
  padding: '60px',
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.5,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));
