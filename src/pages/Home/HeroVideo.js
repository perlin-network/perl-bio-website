import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player/lazy';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { navbarHeight, navbarHeightSmall } from '../../theme';
import PreviewImage from '../../assets/video/preview-01.jpg';

const url = 'https://www.w3schools.com/html/mov_bbb.mp4';
const contentPadding = 60;

export default function HeroVideo() {
  const [contentVisible, setContentVisible] = useState(true);
  return (
    <Root>
      <ReactPlayer
        url={url}
        light={PreviewImage}
        playIcon={<PlayIcon style={{ opacity: 0.6 }} />}
        playing
        muted
        loop
        width="100%"
        height="100%"
        onClickPreview={() => setContentVisible(false)}
      />
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
  fontWeight: 700,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: 36,
  },
}));
