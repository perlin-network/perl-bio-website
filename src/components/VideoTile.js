import React from 'react';
import styled from '@emotion/styled';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player/lazy';

import { ReactComponent as PlayIcon } from '../assets/icons/play.svg';

export default function VideoTile({ url, preview, inverted, children }) {
  return (
    <Root>
      <VideoColumn order={{ xs: 1, md: inverted ? 2 : 1 }} inverted={inverted}>
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
      </VideoColumn>
      <DetailsColumn
        order={{ xs: 2, md: inverted ? 1 : 2 }}
        textAlign={{ xs: 'center', md: inverted ? 'right' : 'left' }}
      >
        {children}
      </DetailsColumn>
    </Root>
  );
}

const Root = styled((props) => <Grid container {...props} />)(({ theme }) => ({
  display: 'flex',
}));

const VideoColumn = styled((props) => <Grid item xs={12} md={6} {...props} />, {
  shouldForwardProp: (prop) => prop !== 'inverted',
})(({ theme, inverted }) => ({
  position: 'relative',
  minHeight: 720,
  [theme.breakpoints.down('md')]: {
    minHeight: 375,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: inverted
      ? `linear-gradient(270deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`
      : `linear-gradient(90deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(180deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    },
  },
  '& video': {
    objectFit: 'cover',
  },
}));

const DetailsColumn = styled((props) => (
  <Grid item xs={12} md={6} {...props} />
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
