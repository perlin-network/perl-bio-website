import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Illustration from '../../assets/home/illustration.png';
import Illustration2x from '../../assets/home/illustration@2x.png';
import { ReactComponent as DividerSvg } from '../../assets/home/divider.svg';

const Root = styled('section')(({ theme }) => ({
  marginTop: `${theme.spacing(3)} 0`,
  padding: `40px 0`,
  [theme.breakpoints.down('sm')]: {
    padding: `32px 0`,
  },
}));

const Title = styled((props) => <Typography variant="h2" {...props} />)(
  ({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
  })
);

const QuoteFigure = styled('figure')(({ theme }) => ({
  margin: '40px auto',
  maxWidth: 700,
  textAlign: 'center',
}));

const Blockquote = styled('blockquote')(({ theme }) => ({
  margin: 0,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
  },
  '&:first-letter': {
    color: theme.palette.primary.main,
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
  },
}));

function EcosystemProtection() {
  return (
    <Root className="EcosystemProtection">
      <Container>
        <Grid
          container
          spacing={{ sm: 6 }}
          sx={{ padding: { md: '40px 0', xs: 0 } }}
        >
          <Grid item sm={6} xs={12}>
            <Title>The path to sustained ecosystem protection</Title>
            <Typography my={2} fontSize={20}>
              We are passionate about the environment.
            </Typography>
            <Typography my={2} fontSize={20}>
              For the past 15 years, we have invested our own time and money to
              protect ecosystems, lobby private and public sectors to avoid
              deforestation, and are pioneering biodiversity units.
            </Typography>
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
                  lg: 530,
                  sm: 400,
                  xs: 180,
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
          </Grid>
        </Grid>
        <QuoteFigure>
          <DividerSvg />
          <Blockquote>
            We work to empower companies, communities and innovators in
            achieving carbon-neutral, sustainable outcomes that place the
            biosphere and the people that protect it at the centre of the value
            equation
          </Blockquote>
        </QuoteFigure>
      </Container>
    </Root>
  );
}

export default EcosystemProtection;
