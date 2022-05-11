import React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

import HeroBanner from './HeroBanner';
import Partners from './Partners';

function Home() {
  return (
    <div className="Home">
      <HeroBanner />
      <Partners />
    </div>
  );
}

export default Home;
