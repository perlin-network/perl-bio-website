import React from 'react';
import styled from '@emotion/styled';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useLocation, NavLink } from 'react-router-dom';

import LogoSvg from '../../assets/logo.svg';
import MobileDrawer from './MobileDrawer';

const navLinks = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/team',
    text: 'team',
  },
  {
    path: '/work',
    text: 'work',
  },
  {
    path: '/contact',
    text: 'contact',
  },
];

const langs = [
  {
    text: 'en',
    path: '/en',
  },
  {
    text: 'fr',
    path: '/fr',
  },
  {
    text: 'id',
    path: '/id',
  },
];

export default function Navbar() {
  const location = useLocation();
  const trigger = useScrollTrigger();
  return (
    <Slide appear={trigger} direction="down" in={!trigger}>
      <Root className="Navbar">
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              href="/"
              rel="noopener noreferrer"
              sx={{
                display: 'block',
                width: {
                  sm: 198,
                  xs: 133,
                },
              }}
            >
              <img
                src={LogoSvg}
                style={{ height: '100%', width: '100%' }}
                alt="Bioeconomy"
              />
            </Link>
            <Stack direction="row" spacing={6}>
              <Stack direction="row" spacing={3}>
                {navLinks.map((link) => (
                  <MenuLink
                    key={link.text}
                    text={link.text}
                    path={link.path}
                    isActive={location.pathname === link.path}
                  />
                ))}
              </Stack>
              <Stack direction="row" spacing={3}>
                {langs.map((lang) => (
                  <LangLink key={lang.text} text={lang.text} path={lang.path} />
                ))}
              </Stack>
              <MobileDrawer routes={navLinks} />
            </Stack>
          </Box>
        </Container>
      </Root>
    </Slide>
  );
}

const Root = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  height: 116,
  background: alpha('#333336', 0.8),
  borderBottom: '4px solid rgba(255, 255, 255, 0.5)',
  zIndex: 100,
});

const MenuLink = styled(({ path, isActive, ...props }) => (
  <NavLink
    to={path}
    className={(navData) => (navData.isActive ? 'active' : '')}
    {...props}
  >
    {props.text}
  </NavLink>
))({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: 116,
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  fontFamily: "'Bai Jamjuree', sans-serif",
  fontSize: 20,
  fontWeight: 600,
  '&:hover': {
    color: '#FFF',
  },
  '&.active': {
    color: '#FFF',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: -16,
    right: -16,
    bottom: -2,
    height: 4,
    background: '#FFF',
    transform: 'scaleX(0)',
    transformOrigin: 'center left',
    transition: 'all 0.3s ease',
  },
  '&.active::after, &:hover::after': {
    transform: 'scaleX(1)',
  },
});

const LangLink = styled(({ path, isActive, ...props }) => (
  <NavLink to={path} {...props}>
    {props.text}
  </NavLink>
))({
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  fontFamily: "'Bai Jamjuree', sans-serif",
  fontSize: 20,
  fontWeight: 600,
});
