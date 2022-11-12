import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import PageRoot from '../../components/PageRoot';
import HeroImage from '../../assets/hero-image.jpg';
import DorjeePortrait from '../../assets/team/dorjee-portrait.png';
import TheEdgeLogo from '../../assets/team/the-edge-logo.png';
import YahooFinanceLogo from '../../assets/team/yahoo-finance-logo.png';

export default function HeroBanner() {
  return (
    <Root>
      <Container>
        <Grid container spacing={{ xs: 0, md: 12 }} pt={10}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }}>
            <Box pt={8}>
              <Portrait src={DorjeePortrait} alt="Dorjee Sun" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative" zIndex={2}>
              <Typography
                variant="h1"
                mb={10}
                fontSize={{ xs: 36, md: 48 }}
                position="relative"
                zIndex={2}
              >
                Meet the team
              </Typography>
              <Typography
                variant="h2"
                mb={6}
                fontSize={{ xs: 32, md: 36 }}
                fontWeight="600"
              >
                CEO corner from
                <br />
                Dorjee Sun
              </Typography>
              <Typography
                mx={{ xs: 4, md: 0 }}
                mb={{ xs: 4, md: 8 }}
                fontSize={{ xs: 20, md: 24 }}
                fontWeight="600"
              >
                “evolving an economic model that truly embraces the biosphere
                and places nature at the centre of the value equation is the
                ultimate purpose of Bioeconomy“ - read Bioeconomy's latest news
                articles here
              </Typography>
              <Stack
                direction="row"
                py={4}
                spacing={{ xs: 4, md: 8 }}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Link
                  href="https://www.theedgemarkets.com/article/climate-and-environmental-governance-why-bioeconomy-could-be-bigger-internet"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={TheEdgeLogo}
                    alt="The Edge"
                    style={{ width: 192, maxWidth: '100%' }}
                  />
                </Link>
                <Link
                  href="https://finance.yahoo.com/news/aircarbon-exchange-sees-first-trades-034600129.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAADF7pP51b92TYVPE0QC_1j-psR6m4Jw7QJ4ZrAUavIGIKDd8AfcV0CjG8iOgYFuntuY6lvf_bw_8uX9nvLzRwyh2r1_BPqjeoD9ggwDEqEDeR2kU6e9K3U5ol0b3MLovlWTwGjbSZ1bejeqaDyyKznrZFmyLPSy0rQSaLo-NW1H5"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={YahooFinanceLogo}
                    alt="Yahoo Finance"
                    style={{ width: 176, maxWidth: '100%' }}
                  />
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <BackgroundOverlay />
    </Root>
  );
}

const Root = styled(PageRoot)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
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
  a: {
    transform: 'scale(1)',
    transition: '0.15s ease-in',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
}));

const Portrait = styled('img')(({ theme }) => ({
  maxWidth: '80%',
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(4),
    maxWidth: '100%',
  },
}));

const BackgroundOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(180deg, rgba(17, 17, 18, 0) 60%, #111112 100%)`,
  backgroundSize: 'cover',
  zIndex: 1,
}));
