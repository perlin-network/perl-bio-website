import React from 'react';
import styled from '@emotion/styled';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player/lazy';

import MediaGridItem from '../../components/MediaGridItem';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';

export default function ProjectVideo({ url, preview, inverted, children }) {
  return (
    <Root>
      <MediaGridItem
        order={{ xs: 1, md: inverted ? 2 : 1 }}
        inverted={inverted}
      >
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
      <DetailsColumn
        order={{ xs: 2, md: inverted ? 1 : 2 }}
        textAlign={{ xs: 'center', md: inverted ? 'right' : 'left' }}
      >
        {children}
      </DetailsColumn>
    </Root>
  );
}

const Root = styled((props) => <Grid container {...props} />)();

const DetailsColumn = styled((props) => (
  <Grid item xs={12} md={6} {...props} />
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
