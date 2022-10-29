import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import HeroVideo from './HeroVideo';
import VideoGrid from './VideoGrid';
import HighlightedProjects from './HighlightedProjects';
import Team from './Team';
import ContactForm from '../../components/ContactForm';

export default function Home() {
  return (
    <Root component="main">
      <HeroVideo />
      <VideoGrid />
      <HighlightedProjects />
      <Team />
      <ContactForm />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));
