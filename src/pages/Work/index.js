import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ReactPlayer from 'react-player/lazy';

import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import HeroImage from '../../assets/hero-image.jpg';
import TigerTile1 from '../../assets/projects/tiger/tile-01.jpg';
import TigerTile2 from '../../assets/projects/tiger/tile-02.jpg';
import TigerTile3 from '../../assets/projects/tiger/tile-03.jpg';
import TigerTile4 from '../../assets/projects/tiger/tile-04.jpg';
import GorillaTile1 from '../../assets/projects/gorilla/tile-01.jpg';
import GorillaTile2 from '../../assets/projects/gorilla/tile-02.jpg';
import GorillaTile3 from '../../assets/projects/gorilla/tile-03.jpg';
import FrontierSumatra from '../../assets/video/frontier-sumatra.jpg';
import SumatraMap from '../../assets/projects/tiger/sumatra-map.jpg';
import RestorasiEkosistemRiau from '../../assets/projects/tiger/rer-logo.png';

import MediaGridItem from '../../components/MediaGridItem';
import DetailsGridItem from '../../components/DetailsGridItem';

export default function Work() {
  return (
    <Root>
      <HeroTitle>Tiger Carbon</HeroTitle>
      <Box>
        <ImageTile image={TigerTile1}>
          Tiger carbon restores and protects 130,090 hectares of peatland
          ecosystem located in the Kampar Peninsula, Indonesia, an area twice
          the size of Singapore
        </ImageTile>
        <ImageTile image={TigerTile2} inverted>
          Reversing harm caused by four former logging concessions, protecting
          two distinct landscapes dominated by peat swamp forests and lakes
        </ImageTile>
        <ImageTile image={TigerTile3}>
          Protecting over 790 species of plant and animal life including the
          Sumatran Tiger, Storm's Stork, Rhinoceros Hornbill, Malayan Sun Bear
          and the Flat-headed Cat
        </ImageTile>
        <ImageTile image={TigerTile4} inverted>
          Enabling sustainable livelihood opportunities for local communities
          and supporting traditional fishing and honey gathering along with
          forest stewardship
        </ImageTile>
      </Box>
      <Box pt={10} textAlign="center">
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            fontSize={{ xs: 18, md: 48 }}
            sx={{
              transform: { xs: 'translateY(-100%)', md: 'translateY(50%)' },
            }}
          >
            Stories of hope in the powerful Discovery+ film{' '}
            <strong>Frontier Sumatra</strong>
          </Typography>
        </Container>
        <FeaturedVideo>
          <ReactPlayer
            url="https://www.w3schools.com/html/mov_bbb.mp4"
            light={FrontierSumatra}
            playIcon={
              <PlayArrowRoundedIcon sx={{ fontSize: { xs: 60, md: 180 } }} />
            }
            playing
            muted
            loop
            width="100%"
            height="100%"
          />
        </FeaturedVideo>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Box py={8} display="flex" justifyContent="center">
            <LogoSvg />
          </Box>
        </Grid>
      </Grid>
      <Grid container mb={8}>
        <Grid item xs={12} md={6}>
          <FullImage src={SumatraMap} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box py={{ xs: 4, md: 0 }} px={8}>
            <Typography
              textAlign={{ xs: 'center', md: 'left' }}
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
            >
              Tiger carbon is from the Bioeconomy developed Restorasi Ekosistem
              Riau (RER) project, reducing carbon in the atmosphere by more than
              300 million tonnes, learn more about the project or see the VERRA
              registry here:
            </Typography>
            <Link sx={{ display: 'block', maxWidth: 450, margin: '24px auto' }}>
              <FullImage src={RestorasiEkosistemRiau} sx={{}} />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <HeroTitle>Gorilla Carbon</HeroTitle>
      <Box>
        <ImageTile image={GorillaTile1}>
          Gorilla carbon was Africa's first sustainable forest management REDD+
          project protecting 92,530 hectares of forest in the Congo Basin
        </ImageTile>
        <ImageTile image={GorillaTile2} inverted>
          Located in the Sangha province within the Republic of Congo the
          project protects 60 mammal species including African Forest Elephants,
          leopards and is home to 6,000 Lowland Gorillas
        </ImageTile>
        <ImageTile image={GorillaTile3}>
          Avoiding 4.9 million tonnes of carbon emissions over the next thirty
          years while providing opportunities for local communities through
          carbon credit revenue sharing as well as community investment
        </ImageTile>
      </Box>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));

const HeroTitle = styled(({ children, ...rest }) => (
  <Stack spacing={{ xs: 3, md: 8 }} {...rest}>
    <LogoSvg />
    <Typography variant="h2" fontSize={{ xs: 32, md: 96 }} fontWeight={500}>
      {children}
    </Typography>
  </Stack>
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '100vh',
  minHeight: 720,
  textAlign: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(180deg, rgba(17, 17, 18, 0.3) 45%, #111112 80%), url(${HeroImage}) no-repeat`,
    backgroundSize: 'cover',
    zIndex: -1,
  },
}));

const ImageTile = ({ image, inverted, children }) => (
  <Grid container>
    <MediaGridItem inverted={inverted}>
      <FullImage src={image} />
    </MediaGridItem>
    <DetailsGridItem inverted={inverted}>
      <Headline>{children}</Headline>
    </DetailsGridItem>
  </Grid>
);

const FullImage = styled('img')({
  maxWidth: '100%',
  height: '100%',
});

const Headline = styled(Typography)(({ theme }) => ({
  padding: '30px 80px',
  color: theme.palette.text.primary,
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 1.7,
  [theme.breakpoints.down('md')]: {
    padding: '80px 60px',
    fontSize: 20,
  },
}));

const FeaturedVideo = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 420,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    height: 120,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(0deg, rgba(17, 17, 18, 0.1) 50%, #111112 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  '& video': {
    objectFit: 'cover',
  },
}));
