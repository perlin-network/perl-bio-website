import React from 'react';
import Box from '@mui/material/Box';

import HeroBanner from './HeroBanner';
import EcosystemProtection from './EcosystemProtection';
import HighlightedProjects from './HighlightedProjects';
import Partners from './Partners';

function Home() {
  return (
    <Box component="main">
      <HeroBanner />
      <EcosystemProtection />
      <HighlightedProjects />
      <Partners />
    </Box>
  );
}

export default Home;
