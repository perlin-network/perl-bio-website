import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

import LogoSvg from '../../assets/logo.svg';
import MobileDrawer from './MobileDrawer';

const navLinks = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/services',
    text: 'Services',
  },
  {
    path: '/projects-and-press',
    text: 'Projects and press',
  },
  {
    path: '/team',
    text: 'Team',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
];

const NavbarWrapper = styled('div')({
  // height: 152,
  backgroundColor: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

const NavbarInner = styled((props) => (
  <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  />
))(({ theme }) => ({
  // height: 152,
  padding: '52px 0',
  [theme.breakpoints.down('md')]: {
    padding: '52px 0 25px',
  },
}));

const NavbarLink = styled((props) => (
  <Grid item key={props.key}>
    <Link
      href={props.path}
      color={props.isActive ? 'primary' : '#000'}
      underline="none"
      {...props}
    >
      {props.text}
    </Link>
  </Grid>
))({
  fontSize: 18,
  fontWeight: 500,
});

export default function Navbar() {
  const location = useLocation();
  const trigger = useScrollTrigger();
  return (
    <Slide appear={trigger} direction="down" in={!trigger}>
      <NavbarWrapper>
        <Container>
          <NavbarInner>
            <Grid item justifyContent="flex-start">
              <Link href="/" rel="noopener noreferrer">
                <img src={LogoSvg} style={{ height: 48 }} alt="Bioeconomy" />
              </Link>
            </Grid>
            <Grid item justifyContent="flex-end">
              <Grid
                container
                justifyContent="space-evenly"
                spacing={5}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                {navLinks.map((link) => (
                  <NavbarLink
                    key={link.text}
                    text={link.text}
                    path={link.path}
                    isActive={location.pathname === link.path}
                  />
                ))}
              </Grid>
              <MobileDrawer routes={navLinks} />
            </Grid>
          </NavbarInner>
        </Container>
      </NavbarWrapper>
    </Slide>
  );
}
