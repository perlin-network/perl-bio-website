import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import DianFosseyLogo from '../../assets/home/dian-fossey.svg';
import AtaMarieLogo from '../../assets/home/ata-marie.svg';
import SpaceIntelligenceLogo from '../../assets/home/space-intelligence.svg';

const Root = styled('section')(({ theme }) => ({
  padding: `${theme.spacing(3)} 0`,
}));

const Title = styled((props) => <Typography variant="h2" {...props} />)(
  ({ theme }) => ({
    position: 'relative',
    padding: '28px 0',
    fontSize: 30,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 72,
      height: 4,
      backgroundColor: theme.palette.primary.light,
      borderRadius: 4,
    },
  })
);

const Logo = styled(({ src, ...props }) => (
  <Grid item>
    <img src={src} {...props} />
  </Grid>
))({
  maxHeight: 90,
});

function Partners() {
  return (
    <Root className="Partners">
      <Container>
        <Title>PARTNERS AND COLLABORATORS</Title>
        <Grid container alignItems="center" justifyContent="space-around">
          <Logo src={DianFosseyLogo} />
          <Logo src={AtaMarieLogo} />
          <Logo src={SpaceIntelligenceLogo} />
        </Grid>
      </Container>
    </Root>
  );
}

export default Partners;
