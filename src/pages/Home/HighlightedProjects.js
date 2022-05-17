import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import SectionTitle from '../../components/SectionTitle';

import TigerProject from '../../assets/home/tiger-project.png';
import TigerProject2x from '../../assets/home/tiger-project@2x.png';
import GorillaProject from '../../assets/home/gorilla-project.png';
import GorillaProject2x from '../../assets/home/gorilla-project@2x.png';

const projects = [
  {
    title: 'Under development: Tiger project',
    preview: TigerProject,
    previewHiRes: TigerProject2x,
    location: 'Kampar Peninsula, Indonesia',
    size: '130,090 hectares, twice the size of Singapore',
    biodiversity:
      "Sumatran Tiger, Storm's Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat",
  },
  {
    title: 'Under development: Gorilla project',
    preview: GorillaProject,
    previewHiRes: GorillaProject2x,
    location: 'North-western portion of Congo River Basin, Republic of Congo',
    size: '92,530 hectares',
    biodiversity:
      'Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard',
  },
];

const Root = styled('section')(({ theme }) => ({
  margin: '0 0 40px',
}));

const Banner = styled((props) => <Paper {...props} />)(({ theme }) => ({
  padding: '40px 120px',
  backgroundImage:
    'radial-gradient(45.25% 111.94% at 50% 50%, #2A4E49 0%, #343537 100%)',
  boxShadow: '0px 24px 34px -9px rgba(6, 69, 43, 0.25)',
  borderRadius: 16,
  [theme.breakpoints.down('md')]: {
    padding: '40px',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  margin: '24px auto 64px',
  maxWidth: 576,
  color: '#fff',
  fontSize: 20,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    margin: '16px auto 40px',
  },
}));

const ProjectTitle = styled((props) => <Typography variant="h3" {...props} />)(
  ({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
    color: theme.palette.primary.light,
    fontSize: 24,
    fontWeight: 700,
  })
);

const ProjectDetails = styled('ul')({
  margin: 0,
  padding: '0 0 32px',
  listStyle: 'none',
  color: '#fff',
  '& li + li': {
    marginTop: '1rem',
  },
});

const ProjectInfo = styled((props) => (
  <li>
    <div>
      <strong>{props.name}</strong>
    </div>
    <div>{props.children}</div>
  </li>
))({});

function HighlightedProjects() {
  return (
    <Root className="HighlightedProjects">
      <Container>
        <Banner>
          <SectionTitle color="white" centered="true">
            HIGHLIGHTED PROJECTS
          </SectionTitle>
          <Subtitle>
            Our team has led, founded and completed the carbon project
            development in projects around the world, including:
          </Subtitle>
          <Grid
            container
            spacing={{ md: 4, xs: 0 }}
            display="flex"
            justifyContent="space-between"
          >
            {projects.map((p) => (
              <Grid
                item
                key={p.title}
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
              >
                <Box sx={{ maxWidth: { sm: 380, xs: '100%' } }}>
                  <img
                    srcSet={`${p.previewHiRes} 2x`}
                    src={p.preview}
                    alt={p.title}
                    style={{ width: '100%', maxWidth: '100%' }}
                  />
                  <ProjectTitle>{p.title}</ProjectTitle>
                  <ProjectDetails>
                    <ProjectInfo name="Location:">{p.location}</ProjectInfo>
                    <ProjectInfo name="Size:">{p.size}</ProjectInfo>
                    <ProjectInfo name="Biodiversity:">
                      {p.biodiversity}
                    </ProjectInfo>
                  </ProjectDetails>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ margin: '0 auto', maxWidth: { sm: 380, xs: '100%' } }}
          >
            <Button
              href="/projects"
              variant="contained"
              size="large"
              fullWidth={true}
            >
              DISCOVER MORE
            </Button>
          </Box>
        </Banner>
      </Container>
    </Root>
  );
}

export default HighlightedProjects;
