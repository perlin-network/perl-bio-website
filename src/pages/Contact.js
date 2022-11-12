import React from 'react';
import styled from '@emotion/styled';

import HeroImage from '../assets/hero-image.jpg';
import ContactForm from '../components/ContactForm';
import PageRoot from '../components/PageRoot';

export default function Contact() {
  return (
    <Root>
      <ContactForm />
    </Root>
  );
}

const Root = styled(PageRoot)(({ theme }) => ({
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(180deg, rgba(17, 17, 18, 0.3) 40%, #111112 70%), url(${HeroImage}) no-repeat`,
    backgroundSize: 'cover',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(180deg, rgba(17, 17, 18, 0.3) 20%, #111112 50%), url(${HeroImage}) no-repeat`,
    },
  },
}));
