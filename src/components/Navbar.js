import React from 'react';
import styled from '@emotion/styled';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { NavLink } from 'react-router-dom';

import LogoSvg from '../assets/logo.svg';
import LangList from './LangList';
import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';

export const routes = [
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

export default function Navbar() {
  // const location = useLocation();
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
                display: 'flex',
                width: {
                  md: 198,
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
            <Stack
              direction="row"
              spacing={6}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <Stack direction="row" spacing={3}>
                {routes.map((link) => (
                  <MenuLink key={link.text} text={link.text} path={link.path} />
                ))}
              </Stack>
              <Box display="flex" alignItems="center" my="auto">
                <LangList />
              </Box>
              <Box display="flex" alignItems="center" my="auto">
                <ThemeToggle />
              </Box>
            </Stack>
            <MobileDrawer routes={routes} />
          </Box>
        </Container>
      </Root>
    </Slide>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  height: 116,
  background: alpha('#333336', 0.8),
  borderBottom: '4px solid rgba(255, 255, 255, 0.5)',
  zIndex: 100,
  [theme.breakpoints.down('md')]: {
    height: 60,
    borderBottom: 0,
  },
}));

const MenuLink = styled(({ path, ...props }) => (
  <NavLink
    to={path}
    className={(navData) => (navData.isActive ? 'active' : '')}
    {...props}
  >
    {props.text}
  </NavLink>
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: 116,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontFamily: "'Bai Jamjuree', sans-serif",
  fontSize: 20,
  fontWeight: 600,
  '&:hover, &.active': {
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
}));
