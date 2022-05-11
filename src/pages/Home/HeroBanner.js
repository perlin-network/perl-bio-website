import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import HeroImageMobile from '../../assets/home/hero_image_dd8xvs_c_scale,w_629.jpg';
import HeroImageMobile2x from '../../assets/home/hero_image_dd8xvs_c_scale,w_828.jpg';
import HeroImageMd from '../../assets/home/hero_image_w5nkuc_c_scale,w_1100.jpg';
import HeroImageLg from '../../assets/home/hero_image_w5nkuc_c_scale,w_1632.jpg';
import HeroImageXl from '../../assets/home/hero_image_w5nkuc_c_scale,w_2400.jpg';

const HeroWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '35px 0',
  maxWidth: 850,
  zIndex: 1,
}));

const HeroTitle = styled((props) => <Typography variant="h1" {...props} />)(
  ({ theme }) => ({
    color: '#fff',
    fontSize: 64,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  })
);

const HeroSubtitle = styled((props) => (
  <Typography variant="subtitle1" {...props} />
))(({ theme }) => ({
  margin: '24px 0 32px',
  color: '#fff',
  fontSize: 24,
  lineHeight: 1.5,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

const HeroBackground = styled((props) => (
  <picture>
    <source
      media="(max-width: 600px)"
      srcSet={`
          ${HeroImageMobile} 1x,
          ${HeroImageMobile2x} 2x
        `}
    />
    <source
      media="(min-width: 601px)"
      srcSet={`
          ${HeroImageMd} 1100w,
          ${HeroImageLg} 1632w,
          ${HeroImageXl} 2400w
        `}
    />
    <img src={HeroImageLg} alt="Hero background" {...props} />
  </picture>
))(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
}));

function HeroBanner() {
  return (
    <HeroWrapper
      className="HeroBanner"
      component="section"
      sx={{ minHeight: { md: 600 } }}
    >
      <Container>
        <HeroContent>
          <HeroTitle>Welcome to the regenerative economy</HeroTitle>
          <HeroSubtitle>
            We bring together expertise, innovative technologies, landowners and
            communities to create new rewards while protecting, conserving, and
            restoring our biosphere
          </HeroSubtitle>
          <Button href="/contact" variant="contained" size="large">
            Contact Us
          </Button>
        </HeroContent>
      </Container>
      <HeroBackground />
    </HeroWrapper>
  );
}

export default HeroBanner;
