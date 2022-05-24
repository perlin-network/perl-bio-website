import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { PageTitle, PageTitleParagraph } from '../components/styled';

import Illustration from '../assets/team/illustration.png';
import Illustration2x from '../assets/team/illustration@2x.png';

import data from '../data/team';

const MemberPhoto = styled('img')(({ theme }) => ({
  marginBottom: 24,
  width: 200,
  height: 200,
  borderRadius: 16,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 16,
    width: 150,
    height: 150,
  },
}));

const MemberName = styled((props) => <Typography variant="h3" {...props} />)(
  ({ theme }) => ({
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  })
);

const MemberTitle = styled((props) => <Typography variant="h4" {...props} />)(
  ({ theme }) => ({
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.primary.main,
    fontSize: 18,
  })
);

const MemberExperience = styled(({ items, ...props }) => (
  <Box component="ul" m={0} pl={2} {...props}>
    {items.map((item) => (
      <Box component="li" py={1}>
        {item}
      </Box>
    ))}
  </Box>
))(({ theme }) => ({
  maxWidth: 460,
}));

function Team() {
  return (
    <div className="Team">
      <Box component="section" py="30px">
        <Container>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box flex="1" pr={4}>
              <PageTitle>Team</PageTitle>
              <PageTitleParagraph>Meet our leadership</PageTitleParagraph>
            </Box>
            <Box
              component="figure"
              m={0}
              sx={{
                width: {
                  md: 700,
                  sm: 430,
                  xs: 284,
                },
              }}
            >
              <img
                srcSet={`${Illustration2x} 2x`}
                src={Illustration}
                alt="Illustration"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" pb="80px">
        <Container>
          <Grid container>
            {data.map((member) => (
              <Grid
                item
                sm={6}
                xs={12}
                mt={{ md: '56px', xs: '40px' }}
                pr={{ sm: '72px', xs: 0 }}
              >
                <MemberPhoto src={member.image} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberTitle>{member.title}</MemberTitle>
                <MemberExperience items={member.experience} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Team;
