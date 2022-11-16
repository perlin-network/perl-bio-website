import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import Logo from '../assets/logo.svg';
import { routes } from './Navbar';
// import ThemeToggle from './ThemeToggle';
// import LangList from './LangList';
import ScrollAnchor from './ScrollAnchor';

export default function Footer() {
  const footerRoutes = routes.slice(1).map((route) => ({
    ...route,
    text: route.text.charAt(0).toUpperCase() + route.text.slice(1),
  }));

  const [scrollTrigger, setScrollTrigger] = useState(false);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const offset = 250;

    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) + offset >=
        document.documentElement.scrollHeight;
      setScrollTrigger(bottom);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTrigger]);

  return (
    <Root>
      <Container sx={{ position: 'relative' }}>
        <Grid container>
          <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography color="textPrimary" fontSize="18px" mb={3}>
              Quick Links
            </Typography>
            <Stack display="inline-flex" spacing={0.25}>
              {footerRoutes.map((r) => (
                <NavLink key={r.path} href={r.path} color="textSecondary">
                  {r.text}
                </NavLink>
              ))}
            </Stack>
            {/* <Box
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 4, ml: { xs: 0, md: -1 } }}
            >
              <ThemeToggle />
            </Box> */}
            <Box
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              mt={4}
            >
              <SocialIcons />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} display="flex">
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                order={{ xs: 1, md: 0 }}
                display="flex"
                justifyContent="center"
              >
                <Stack
                  direction="row"
                  mt={{ xs: 2, md: 'auto' }}
                  spacing={1}
                  divider={
                    <Divider orientation="vertical" variant="middle" flexItem />
                  }
                >
                  <Link
                    href="/terms"
                    color="textSecondary"
                    fontSize="12px"
                    underline="none"
                  >
                    Terms of use
                  </Link>
                  <Link
                    href="/privacy"
                    color="textSecondary"
                    fontSize="12px"
                    underline="none"
                  >
                    Privacy policy
                  </Link>
                </Stack>
              </Grid>
              <Grid item flex="1" xs={12} md={6} display="flex">
                <Stack
                  flex="1"
                  alignItems={{ xs: 'center', md: 'flex-end' }}
                  textAlign="right"
                >
                  <Box display="flex" flex="1" my={{ xs: 4, md: 0 }}>
                    {/* <LangList /> */}
                  </Box>
                  <img src={Logo} alt="Bioeconomy" style={{ width: 138 }} />
                  <Typography
                    color="textSecondary"
                    textAlign={{ xs: 'center', md: 'left' }}
                    fontSize="12px"
                    mt={2}
                  >
                    Copyright © Bioeconomy {new Date().getFullYear()}. All
                    rights reserved
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ScrollAnchor in={scrollTrigger} onClick={handleClick} />
      </Container>
    </Root>
  );
}

const SocialIcons = () => (
  <Stack direction="row" spacing={6} sx={{ opacity: 0.8 }}>
    <Link
      href="https://twitter.com/Bioeconomy_Com"
      target="_blank"
      rel="noopener"
    >
      <TwitterIcon />
    </Link>
    <Link
      href="https://sg.linkedin.com/company/bioeconomyco"
      target="_blank"
      rel="noopener"
    >
      <LinkedInIcon />
    </Link>
    <Link
      href="https://www.youtube.com/channel/UC5V248elOeMQ5eCNtJzHrrw"
      target="_blank"
      rel="noopener"
    >
      <YouTubeIcon />
    </Link>
    <Link
      href="https://www.instagram.com/bioeconomy.co/"
      target="_blank"
      rel="noopener"
    >
      <InstagramIcon />
    </Link>   
  </Stack>
);

const Root = styled('footer')(({ theme }) => ({
  marginTop: 48,
  padding: `112px 66px`,
  backgroundColor: theme.palette.background.neutral,
  overflow: 'hidden',
  fontSize: 14,
  [theme.breakpoints.down('md')]: {
    marginTop: 80,
    padding: `48px 66px`,
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: 16,
  textDecoration: 'none',
  '&:hover': {
    color: '#FFF',
  },
}));
