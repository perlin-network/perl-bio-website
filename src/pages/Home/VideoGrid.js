import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoTile from './VideoTile';

export default function VideoGrid() {
  return (
    <Root component="section">
      <VideoTile url="https://s3.amazonaws.com/static.memoriverse/Prevent+the+destruction+of+our+natural+environment.mp4">
        <Headline>Prevent the destruction of our natural environment</Headline>
      </VideoTile>
      <VideoTile
        url="https://s3.amazonaws.com/static.memoriverse/Providing+pathways+to+net+zero+goals.mp4"
        inverted
      >
        <Headline>Providing pathways to net-zero goals</Headline>
      </VideoTile>
      <VideoTile url="https://s3.amazonaws.com/static.memoriverse/With+carbon+credits+that+protect+biodiversity.mp4">
        <Headline>With carbon credits that protect biodiversity</Headline>
      </VideoTile>
      <VideoTile
        url="https://s3.amazonaws.com/static.memoriverse/Putting+nature+at+the+heart+of+the+value+equation.mp4"
        inverted
      >
        <Headline>Putting nature at the heart of the value equation</Headline>
      </VideoTile>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));

const Headline = styled(Typography)(({ theme }) => ({
  // maxWidth: '60%',
  color: theme.palette.text.primary,
  fontSize: 48,
  lineHeight: 1.33,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    padding: '80px 30px',
    // maxWidth: '100%',
    fontSize: 36,
  },
}));
