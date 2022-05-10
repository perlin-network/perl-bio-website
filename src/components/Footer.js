import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled } from '@mui/material/styles';

import Logo from '../assets/logo-grayscale.svg';

const navRoutes = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/team',
    text: 'Team',
  },
  {
    path: '/services',
    text: 'Services',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
  {
    path: '/projects-and-press',
    text: 'Projects and press',
  },
];

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  fontSize: 14,
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
}));

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{ py: 3 }}
        >
          <Grid item xs={6} md={4} justifyContent="flex-start">
            <Grid container rowSpacing={2} spacing={4}>
              {navRoutes.map((r) => (
                <Grid item xs={6}>
                  <NavLink href={r.path}>{r.text}</NavLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            item
            display="flex"
            alignItems="center"
            order={{ xs: 3, md: 2 }}
          >
            <Grid container spacing={4}>
              <Grid item>
                <Link href="#">
                  <FacebookIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <TwitterIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <YouTubeIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={4} order={{ xs: 2, md: 3 }}>
            <Grid container direction="column" textAlign="right" spacing={2}>
              <Grid item>
                <img src={Logo} alt="Bioeconomy" style={{ width: 138 }} />
              </Grid>
              <Grid item>
                Copyright © Bioeconomy {new Date().getFullYear()}. All rights
                reserved
              </Grid>
              <Grid item>
                <Link href="/terms" underline="none" sx={{ pr: 2 }}>
                  Terms of use
                </Link>
                <Link href="/privacy" underline="none">
                  Privacy policy
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}
export default Footer;
