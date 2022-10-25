import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import HeroVideo from './HeroVideo';
import VideoGrid from './VideoGrid';
import HighlightedProjects from './HighlightedProjects';
import Team from './Team';
import Contact from './Contact';

export default function Home() {
  return (
    <Root component="main">
      <HeroVideo />
      <VideoGrid />
      <HighlightedProjects />
      <Team />
      <Contact />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));
