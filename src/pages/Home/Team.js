import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

import data from '../../data/team';

export default function Team() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Root component="section">
      <Container>
        <Headline mt={{ xs: 14, md: 26 }} mb={{ xs: 14, md: 18 }}>
          Made possible by a team of highly-skilled professionals with decades
          of experience creating nature-based climate solutions
        </Headline>
      </Container>
      <Box>
        {/* <ImageList cols={isMobile ? 2 : 4} rowHeight={360} gap={0}>
          {data.map((item) => (
            <TeamMember key={item.id}>
              <ImageLink href={`/team#${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: '100%', height: '100%' }}
                />
                <ImageListItemBar title={item.name} subtitle={item.title} />
              </ImageLink>
            </TeamMember>
          ))}
        </ImageList> */}
        <Grid container>
          {data.map((item) => (
            <Grid item xs={6} md={3} key={item.id}>
              <ImageLink href={`/team#${item.id}`}>
                <ProfilePicture src={item.image} alt={item.name} />
                <ProfileInfo>
                  <Box>
                    <Typography fontSize={{ xs: 14, md: 24 }} fontWeight={700}>
                      {item.name}
                    </Typography>
                    <Typography fontSize={{ xs: 10, md: 14 }} fontWeight={700}>
                      {item.title}
                    </Typography>
                  </Box>
                </ProfileInfo>
              </ImageLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  paddingBottom: 150,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingBottom: 64,
  },
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 52 / 36,
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    lineHeight: 38 / 24,
  },
}));

// const TeamMember = styled(ImageListItem)(({ theme }) => ({
//   overflow: 'hidden',
//   '.MuiImageListItemBar-title': {
//     fontSize: 24,
//     fontWeight: 700,
//     [theme.breakpoints.down('md')]: {
//       fontSize: 14,
//     },
//   },
//   '.MuiImageListItemBar-subtitle': {
//     marginTop: 4,
//     fontSize: 14,
//     fontWeight: 700,
//     [theme.breakpoints.down('md')]: {
//       fontSize: 8,
//     },
//   },
// }));

const ImageLink = styled(Link)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  img: {
    transition: '0.15s ease-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ProfilePicture = styled('img')(({ theme }) => ({
  display: 'block',
  maxWidth: '100%',
  width: 360,
  height: 'auto',
  margin: '0 auto',
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 78,
  background: 'rgba(0, 0, 0, 0.6)',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    height: 48,
  },
}));
