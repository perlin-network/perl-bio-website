import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import HeroVideo from './HeroVideo';
import VideoGrid from './VideoGrid';
// import EcosystemProtection from './EcosystemProtection';
// import HighlightedProjects from './HighlightedProjects';
// import Partners from './Partners';

export default function Home() {
  return (
    <Root component="main">
      <HeroVideo />
      <VideoGrid />
      {/* <EcosystemProtection />
      <HighlightedProjects />
      <Partners /> */}
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));
