import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoTile from './VideoTile';

export default function VideoGrid() {
  return (
    <Root component="section">
      <VideoTile url="https://s3.amazonaws.com/static.memoriverse/Glacier_Calving_in_Blackstone_Bay_Whittier_AK+(1).mp4">
        <Headline>prevent the destruction of our natural environment</Headline>
      </VideoTile>
      <VideoTile
        url="https://s3.amazonaws.com/static.memoriverse/Refinery027+(1).mp4"
        inverted
      >
        <Headline>providing pathways to net-zero goals</Headline>
      </VideoTile>
      <VideoTile url="https://s3.amazonaws.com/static.memoriverse/Bee_on_flower.mp4">
        <Headline>with carbon credits that protect biodiversity</Headline>
      </VideoTile>
      <VideoTile
        url="https://s3.amazonaws.com/static.memoriverse/_DSC6775.mp4"
        inverted
      >
        <Headline>putting nature at the heart of the value equation</Headline>
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
