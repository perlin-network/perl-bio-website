import React from 'react';
import HeroBanner from './HeroBanner';
import EcosystemProtection from './EcosystemProtection';
import HighlightedProjects from './HighlightedProjects';
import Partners from './Partners';

function Home() {
  return (
    <div className="Home">
      <HeroBanner />
      <EcosystemProtection />
      <HighlightedProjects />
      <Partners />
    </div>
  );
}

export default Home;
