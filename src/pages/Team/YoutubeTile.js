import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ReactPlayer from 'react-player/lazy';

export default function YoutubeTile({ url, inverted, children }) {
  return (
    <Root>
      <VideoColumn
        order={{ xs: 1, md: inverted ? 2 : 1 }}
        inverted={inverted ? 1 : 0}
      >
        <AspectRatioWrapper>
          <ReactPlayer url={url} muted loop width="100%" height="100%" />
        </AspectRatioWrapper>
      </VideoColumn>
      <DetailsColumn
        order={{ xs: 2, md: inverted ? 1 : 2 }}
        textAlign={{ xs: 'center', md: inverted ? 'right' : 'left' }}
      >
        <Box maxWidth={{ xs: '100%', md: '60%' }}>{children}</Box>
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
  // minHeight: 720,
  [theme.breakpoints.down('md')]: {
    // minHeight: 375,
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

const AspectRatioWrapper = ({ children }) => (
  <Box sx={{ paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
);

const DetailsColumn = styled((props) => (
  <Grid item xs={12} md={6} {...props} />
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(12)} ${theme.spacing(6)}`,
  },
}));
