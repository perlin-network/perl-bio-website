import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import {
  PageTitle,
  PageTitleParagraph,
  // SectionTitle,
  SectionIllustration,
} from '../../components/styled';
import ProjectList from './ProjectList';
// import News from './News';

import Illustration from '../../assets/projects/illustration.png';
import Illustration2x from '../../assets/projects/illustration@2x.png';

function Projects() {
  return (
    <div className="Projects">
      <Box
        component="section"
        sx={{
          pt: '30px',
          pb: {
            md: '80px',
            sm: '20px',
            xs: '30px',
          },
        }}
      >
        <Container>
          <Box display="flex" flexDirection={{ sm: 'row', xs: 'column' }}>
            <Box flex="1">
              <Box sx={{ maxWidth: { lg: 420 } }}>
                <PageTitle>Projects and press</PageTitle>
                <PageTitleParagraph>
                  Read more about some of the highlights from Bioeconomy’s
                  project portfolio
                </PageTitleParagraph>
              </Box>
            </Box>
            <SectionIllustration
              srcSet={`${Illustration2x} 2x`}
              src={Illustration}
              mx={{ sm: 2, xs: 'auto' }}
            />
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: {
            md: '80px',
            sm: '24px',
            xs: '34px',
          },
        }}
        bgcolor="background.neutral"
      >
        <Container>
          <ProjectList />
        </Container>
      </Box>

      {/* <Box
        component="section"
        sx={{
          mb: '164px',
          py: {
            sm: '40px',
            xs: '32px',
          },
        }}
        bgcolor="background.accent"
      >
        <Container>
          <SectionTitle color="white" centered="true">
            News and press
          </SectionTitle>
          <Typography
            color="white"
            textAlign="center"
            mt={{ md: 3, xs: 2 }}
            mb={{ lg: 4, xs: 3 }}
            fontSize={20}
          >
            See Bioeconomy's team in the press:
          </Typography>
          <News />
        </Container>
      </Box> */}
    </div>
  );
}

export default Projects;
