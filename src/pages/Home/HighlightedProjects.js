import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import VideoTile from '../../components/VideoTile';
import TigerImage from '../../assets/video/project-tiger.jpg';
import GorillaImage from '../../assets/video/project-gorilla.jpg';

const url = 'https://www.w3schools.com/html/mov_bbb.mp4';

export default function HighlightedProjects() {
  return (
    <Root component="section">
      <Container>
        <Box my={{ xs: 8, md: 16 }} textAlign="center">
          <Title variant="h2" mb={8}>
            This is why we deliver the highest quality carbon reduction
            solutions
          </Title>
          <Text mb={{ xs: 8, md: 0 }}>
            With projects that reduce carbon in the atmosphere while protecting
            biodiverse ecosystems on land and in water
          </Text>
        </Box>
      </Container>
      <VideoTile url={url} preview={TigerImage}>
        <Project>
          <ProjectName>Tiger carbon ensures</ProjectName>
          <ProjectDesc>
            tiger carbon ensures 130,090ha are protected and restored, achieving
            6.4+ million tonnes in emissions reductions each year and over 370
            million tonnes over the next fifty years, protecting 797 species,
            planting 70 different native tree varieties, contributing to
            sustainable livelihoods for 17,000 people in the local community
          </ProjectDesc>
          <LearnMore href="#">learn more</LearnMore>
        </Project>
      </VideoTile>
      <VideoTile url={url} preview={GorillaImage} inverted>
        <Project>
          <ProjectName>Gorilla carbon</ProjectName>
          <ProjectDesc>
            gorilla carbon was the first of Africa's sustainable forest
            management REDD+ projects, protecting 92,530ha of the Congo Basin,
            avoiding 4.9 million tonnes of CO2 over the next thirty years while
            protecting 6,000+ lowland gorillas, one of 60 mammal species within
            the conservation area
          </ProjectDesc>
          <LearnMore href="#">learn more</LearnMore>
        </Project>
      </VideoTile>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 48,
  fontWeight: 600,
  lineHeight: 77 / 48,
  [theme.breakpoints.down('md')]: {
    lineHeight: 58 / 48,
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 77 / 36,
  [theme.breakpoints.down('md')]: {
    lineHeight: 48 / 36,
  },
}));

const Project = styled((props) => (
  <Box px={{ xs: 4, md: 8 }} py={{ xs: 8, md: 6 }} {...props} />
))();

const ProjectName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 36,
  fontWeight: 600,
}));

const ProjectDesc = styled(Typography)(({ theme }) => ({
  margin: '42px 0',
  color: theme.palette.text.primary,
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 42 / 24,
}));

const LearnMore = styled((props) => (
  <Button variant="contained" size="large" {...props} />
))({
  paddingTop: '18px',
  paddingBottom: '18px',
  width: 250,
  background: '#CFCFD0',
  color: '#000',
  borderRadius: 0,
  textTransform: 'none',
  fontSize: 20,
});
