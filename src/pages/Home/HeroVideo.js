import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player/lazy';

import { navbarHeight, navbarHeightSmall } from '../../theme';

const contentPadding = 60;

export default function HeroVideo() {
  const [contentVisible, setContentVisible] = useState(false);
  const [shouldPlay, updatePlayState] = useState(true);

  const handleEnterViewport = function () {
    updatePlayState(true);
  };
  const handleExitViewport = function () {
    updatePlayState(false);
  };

  return (
    <Root>
      <Waypoint
        onEnter={handleEnterViewport}
        onLeave={handleExitViewport}
        topOffset={100}
      >
        <Box width="100%" height="100%">
          <ReactPlayer
            url="https://s3.amazonaws.com/static.memoriverse/mountain_forest3.mp4"
            playing={shouldPlay}
            muted
            loop
            width="100%"
            height="100%"
            onStart={() => {
              setContentVisible(true);
            }}
          />
        </Box>
      </Waypoint>
      {contentVisible && (
        <Content>
          <Headline variant="h1">Be part of the regenerative economy</Headline>
        </Content>
      )}
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    paddingTop: navbarHeightSmall,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(205.29deg, rgba(17, 17, 18, 0.3) 45.93%, ${theme.palette.background.default} 82.56%)`,
    pointerEvents: 'none',
    zIndex: 1,
  },
  '& .react-player__preview': {
    alignItems: 'flex-start !important',
    padding: navbarHeight,
    '& svg': {
      marginTop: 60,
    },
  },
  '& video': {
    objectFit: 'cover',
  },
}));

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Content = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  inset: 0,
  top: navbarHeight,
  padding: contentPadding,
  pointerEvents: 'none',
  animation: `${fadeIn} 0.65s ease-out`,
  zIndex: 2,
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 96,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: 36,
  },
}));
