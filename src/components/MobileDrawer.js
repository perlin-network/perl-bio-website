import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import LangList from './LangList';
import ThemeToggle from './ThemeToggle';

function MobileDrawer(props) {
  const [open, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback((open) => {
    setDrawerOpen(open);
  }, []);

  return (
    <>
      <DrawerOpener open={open} onClick={() => toggleDrawer(!open)} />
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        anchor="right"
        hideBackdrop={true}
        PaperProps={{ sx: { backgroundImage: 'none' } }}
        sx={{ top: 60, [`& .MuiDrawer-paper`]: { top: 60 } }}
      >
        <DrawerContent spacing={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {props.routes.map((link) => (
              <DrawerLink key={link.text} path={link.path} text={link.text} />
            ))}
          </Box>
          <Box display="flex" justifyContent="center">
            <LangList />
          </Box>
          <Box display="flex" justifyContent="center">
            <ThemeToggle />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const iconButtonMixin = (theme) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 500,
  '& .MuiButton-endIcon > svg': {
    color: theme.palette.primary.main,
    fontSize: 24,
  },
});

const DrawerOpener = styled((props) => (
  <IconButton
    aria-label="open drawer"
    sx={{
      display: {
        md: 'none',
      },
    }}
    {...props}
  >
    {props.open ? <CloseIcon /> : <MenuIcon />}
  </IconButton>
))(({ theme }) => ({
  ...iconButtonMixin(theme),
  color: '#FFF',
}));

const DrawerContent = styled(Stack)({
  width: 360,
  padding: '54px 16px',
});

const DrawerLink = styled(({ path, ...props }) => (
  <NavLink
    to={path}
    className={(navData) => (navData.isActive ? 'active' : '')}
    {...props}
  >
    {props.text}
  </NavLink>
))({
  margin: '20px 0',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: 18,
  fontWeight: 500,
  textDecoration: 'none',
  '&:hover, &.active': {
    color: '#FFF',
  },
});

export default MobileDrawer;
