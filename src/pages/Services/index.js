import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import SectionTitle from '../../components/SectionTitle';
import OpportunityList from './OpportunityList';
import GoalGrid from './GoalGrid';

import Illustration1 from '../../assets/services/illustration-01.png';
import Illustration2 from '../../assets/services/illustration-02.png';
import Illustration2Mobile from '../../assets/services/illustration-02-mobile.png';

const PageTitle = styled((props) => <Typography variant="h1" {...props} />)(
  ({ theme }) => ({
    fontSize: 40,
    fontWeight: 700,
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
  })
);

const TitleParagraph = styled(Typography)(({ theme }) => ({
  marginTop: 24,
  marginBottom: 16,
  fontSize: 28,
  lineHeight: 1.4,
  [theme.breakpoints.down('md')]: {
    marginTop: 16,
    fontSize: 18,
  },
}));

const BackgroundSection = styled('section')(({ theme }) => ({
  padding: '60px 0',
  backgroundColor: theme.palette.background.neutral,
  backgroundImage: `url(${Illustration2})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  backgroundSize: '65%',
  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${Illustration2Mobile})`,
    padding: '40px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0',
    backgroundImage: 'none',
  },
}));

function Services() {
  return (
    <div className="Services">
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
          <Grid container>
            <Grid item sm={6} xs={12}>
              <PageTitle>Services</PageTitle>
              <TitleParagraph>
                Bioeconomy conserves and restores natural habitats around the
                world. Our company is a carbon, biodiversity and environmental
                tech project developer with a proven business model that
                delivers benefits for partners, local communities and the
                environment
              </TitleParagraph>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              display="flex"
              justifyContent={{ sm: 'flex-end', xs: 'center' }}
            >
              <Box
                component="figure"
                m={0}
                sx={{
                  width: {
                    xl: 454,
                    md: 354,
                    sm: 234,
                    xs: 184,
                  },
                }}
              >
                <img
                  src={Illustration1}
                  alt="Illustration 1"
                  style={{ width: '100%', maxWidth: '100%' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <BackgroundSection>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 'auto',
              width: {
                sm: '55%',
              },
            }}
          >
            <SectionTitle>Trusted partners to landowners</SectionTitle>
            <Typography sx={{ mt: '16px', fontSize: { md: 20, xs: 18 } }}>
              We work with landowners and concession holders to develop and
              implement projects from start to finish. We assess the carbon
              asset, work with communities to gain their support; and prepare
              the technical requirements and documentation for projects to be
              validated under rigorous standards including the Verified Carbon
              Standard (VCS) and obtain carbon credits
            </Typography>
          </Box>
        </Container>
      </BackgroundSection>

      <Box
        component="section"
        sx={{
          py: {
            lg: '100px',
            md: '80px',
            sm: '40px',
            xs: '30px',
          },
          bgcolor: 'background.accent',
        }}
      >
        <Container>
          <Grid container spacing={{ md: 12, xs: 0 }}>
            <Grid item md={6} xs={12}>
              <SectionTitle color="white">
                Creating opportunities for local communities
              </SectionTitle>
              <Typography
                color="white"
                sx={{ mt: '16px', fontSize: { md: 20, xs: 18 } }}
              >
                We ensure that all projects create net benefits for local
                communities and indigenous stakeholders. This includes
                undertaking detailed social baseline assessments, stakeholder
                engagement, ensuring all communities have consented to any
                project through a FPIC process and that a detailed community
                development plan is developed in conjunction with the community,
                and implemented with its performance and social impact monitored
                and reported
              </Typography>
            </Grid>
            <Grid item md={6} xs={12} sx={{ pt: { md: 0, sm: 4, xs: 2 } }}>
              <OpportunityList />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: {
            md: '80px',
            sm: '40px',
            xs: '30px',
          },
        }}
      >
        <Container>
          <SectionTitle
            centered="true"
            sx={{ maxWidth: 340, margin: '0 auto', pb: { md: 6, sm: 4 } }}
          >
            Meeting sustainability goals
          </SectionTitle>
          <GoalGrid />
        </Container>
      </Box>
    </div>
  );
}

export default Services;
