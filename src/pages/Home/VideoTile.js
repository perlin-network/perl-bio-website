import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player/lazy';

export default function VideoTile({ url, inverted, children }) {
  const [shouldPlay, updatePlayState] = useState(false);
  const handleEnterViewport = function () {
    updatePlayState(true);
  };
  const handleExitViewport = function () {
    updatePlayState(false);
  };

  const [textVisible, setTextVisible] = useState(false);
  const onEnterTextViewpoint = function () {
    setTextVisible(true);
  };

  return (
    <Root>
      <VideoColumn
        order={{ xs: 1, md: inverted ? 2 : 1 }}
        inverted={inverted ? 1 : 0}
      >
        <Waypoint
          onEnter={handleEnterViewport}
          onLeave={handleExitViewport}
          topOffset={200}
          bottomOffset={200}
        >
          <Box width="100%" height="100%">
            <ReactPlayer
              url={url}
              playing={shouldPlay}
              muted
              loop
              width="100%"
              height="100%"
            />
          </Box>
        </Waypoint>
      </VideoColumn>
      <DetailsColumn
        order={{ xs: 2, md: inverted ? 1 : 2 }}
        textAlign={{ xs: 'center', md: inverted ? 'right' : 'left' }}
      >
        <Waypoint onEnter={onEnterTextViewpoint} topOffset={300}>
          <Box
            className={
              textVisible && (inverted ? 'visible-inverted' : 'visible')
            }
            maxWidth={{ xs: '100%', md: '60%' }}
          >
            {children}
          </Box>
        </Waypoint>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(30%, 0%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInInverted = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30%, 0%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const DetailsColumn = styled((props) => (
  <Grid item xs={12} md={6} {...props} />
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.visible, .visible-inverted': {
    animation: `${fadeInUp} 0.75s both ease-out .2s`,
  },
  [theme.breakpoints.up('md')]: {
    '.visible': {
      animation: `${fadeIn} 0.75s both ease-out .2s`,
    },
    '.visible-inverted': {
      animation: `${fadeInInverted} 0.75s both ease-out .2s`,
    },
  },
}));
