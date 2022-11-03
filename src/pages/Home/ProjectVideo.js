import React from 'react';
import styled from '@emotion/styled';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player/lazy';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import MediaGridItem from '../../components/MediaGridItem';
import DetailsGridItem from '../../components/DetailsGridItem';

export default function ProjectVideo({ url, preview, inverted, children }) {
  return (
    <Grid container>
      <MediaGridItem inverted={inverted}>
        <ReactPlayer
          url={url}
          light={preview}
          playIcon={<PlayIcon />}
          playing
          muted
          loop
          width="100%"
          height="100%"
        />
      </MediaGridItem>
      <DetailsGridItem inverted={inverted}>{children}</DetailsGridItem>
    </Grid>
  );
}
