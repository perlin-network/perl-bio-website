import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// import ReactPlayer from 'react-player/lazy';

import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import HeroImage from '../../assets/hero-image.jpg';
// import FrontierSumatra from '../../assets/video/frontier-sumatra.jpg';
// import RestorasiEkosistemRiau from '../../assets/projects/tiger/rer-logo.png';
import GorillaTile1 from '../../assets/projects/gorilla/tile-01.jpg';
import GorillaTile2 from '../../assets/projects/gorilla/tile-02.jpg';
import GorillaTile3 from '../../assets/projects/gorilla/tile-03.jpg';
import GorillaTile4 from '../../assets/projects/gorilla/tile-04.jpg';
import GorillaTile5 from '../../assets/projects/gorilla/tile-05.jpg';
import VerifiedCarbonLogo from '../../assets/projects/gorilla/verified-carbon-logo.png';
import GorillaPartners from '../../assets/projects/gorilla/partners-logo.png';

import MediaGridItem from '../../components/MediaGridItem';
import DetailsGridItem from '../../components/DetailsGridItem';
import ShadowBox from '../../components/ShadowBox';
import TalkToUs from './TalkToUs';
import SummaryList from './SummaryList';
import { gorillaSummaryList } from './data';

export default function Work() {
  return (
    <Root>
      <HeroTitle id="gorilla">Gorilla Carbon</HeroTitle>
      <Box>
        <ImageTile image={GorillaTile1}>
          Gorilla Carbon was Africa's first sustainable forest management REDD+
          project protecting 92,530 ha of forest in the Congo Basin
        </ImageTile>
        <ImageTile image={GorillaTile2} inverted>
          Located in the Sangha province within the Republic of Congo, the
          project protects 60 mammal species including African Forest Elephants,
          leopards and is home to 6,000 Lowland Gorillas
        </ImageTile>
        <ImageTile image={GorillaTile3}>
          Avoiding 4.9 million tonnes of carbon emissions over the next thirty
          years while providing opportunities for local communities through
          carbon credit revenue sharing as well as community investment.
        </ImageTile>
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
          <ShadowBox>
            <FullImage src={GorillaTile4} />
          </ShadowBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box py={{ xs: 4, md: 0 }} px={8}>
            <Typography
              textAlign={{ xs: 'center', md: 'left' }}
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
            >
              Gorilla Carbon is from the Bioeconomy-developed North Pikounda 
              project, which is anticipated to reduce 4+ million tonnes of 
              CO2e over its lifetime. Learn more about the project via 
              the VERRA registry here:
            </Typography>
            <Link
              sx={{ display: 'block', maxWidth: 230, margin: '24px auto' }}
              href="https://registry.verra.org/"
              target="_blank"
              rel="noopener"
            >
              <FullImage src={VerifiedCarbonLogo} />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          order={{ xs: 2, md: 1 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxWidth={500}
            py={{ xs: 8, md: 0 }}
          >
            <FullImage
              src={GorillaPartners}
              style={{ height: 'auto', maxHeight: 356 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <ShadowBox side="left">
            <FullImage src={GorillaTile5} />
          </ShadowBox>
        </Grid>
      </Grid>
      <Summary>
        <SummaryTitle>Tiger Carbon at a glance:</SummaryTitle>
        <SummaryInner>
          <Box display="flex" flex="1">
            <SummaryList data={gorillaSummaryList} />
          </Box>
          <TalkToUs top={contactTop} width={contactWidth} />
        </SummaryInner>
      </Summary>
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
  display: 'block',
  width: '100%',
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

// const FeaturedVideo = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   height: 420,
//   fontSize: 28,
//   [theme.breakpoints.down('md')]: {
//     height: 120,
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     inset: 0,
//     background:
//       'linear-gradient(0deg, rgba(17, 17, 18, 0.1) 50%, #111112 100%)',
//     pointerEvents: 'none',
//     zIndex: 1,
//   },
//   '& video': {
//     objectFit: 'cover',
//   },
// }));

const contactTop = 240;
const contactWidth = 580;

const Summary = ({ mb, children }) => (
  <Box position="relative" overflow="hidden" mb={mb}>
    {children}
  </Box>
);

const SummaryInner = ({ children }) => (
  <Container>
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        maxWidth: { xs: '100%', md: `calc(100% - ${contactWidth}px)` },
      }}
    >
      {children}
    </Stack>
  </Container>
);

const SummaryTitle = ({ children }) => (
  <Container
    sx={{ display: 'flex', alignItems: 'center', height: { md: contactTop } }}
  >
    <Typography variant="h3" fontSize={{ xs: 18, md: 40 }} fontWeight={700}>
      {children}
    </Typography>
  </Container>
);
