import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { SectionTitle } from '../../components/styled';

import DianFosseyLogo from '../../assets/home/dian-fossey.svg';
import AtaMarieLogo from '../../assets/home/ata-marie.svg';
import SpaceIntelligenceLogo from '../../assets/home/space-intelligence.svg';

const Root = styled('section')(({ theme }) => ({
  padding: `${theme.spacing(3)} 0`,
}));

const Logo = styled(({ src, alt, ...props }) => (
  <Grid item>
    <img src={src} alt={alt} {...props} />
  </Grid>
))({
  maxHeight: 90,
});

function Partners() {
  return (
    <Root className="Partners">
      <Container>
        <SectionTitle sx={{ pb: 3 }}>PARTNERS AND COLLABORATORS</SectionTitle>
        <Grid container alignItems="center" justifyContent="space-around">
          <Logo
            src={DianFosseyLogo}
            alt="The Dian Fossey Gorilla Fund International"
          />
          <Logo src={AtaMarieLogo} alt="Ata Marie" />
          <Logo src={SpaceIntelligenceLogo} alt="Space Intelligence" />
        </Grid>
      </Container>
    </Root>
  );
}

export default Partners;
