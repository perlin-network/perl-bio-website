import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';

import { styled } from '@mui/material/styles';

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
  <Button
    aria-label="open drawer"
    sx={{
      display: {
        md: 'none',
      },
    }}
    endIcon={<MenuIcon />}
    {...props}
  >
    Menu
  </Button>
))(({ theme }) => ({
  ...iconButtonMixin(theme),
}));

const DrawerContent = styled('div')({
  width: 300,
  padding: '54px 16px',
});

const CloseMenuButton = styled((props) => (
  <Button aria-label="close drawer" endIcon={<CloseIcon />} {...props}>
    Close
  </Button>
))(({ theme }) => ({
  ...iconButtonMixin(theme),
}));

const DrawerLink = styled(Link)({
  margin: '20px 0',
  fontSize: 18,
  fontWeight: 500,
});

function MobileDrawer(props) {
  const location = useLocation();
  const [open, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback((open) => {
    setDrawerOpen(open);
  }, []);

  return (
    <>
      <DrawerOpener onClick={() => toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <DrawerContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingBottom: '45px',
            }}
          >
            <CloseMenuButton onClick={() => toggleDrawer(false)} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {props.routes.map((link) => (
              <DrawerLink
                key={link.text}
                href={link.path}
                color={location.pathname === link.path ? 'primary' : '#000'}
                underline="none"
              >
                {link.text}
              </DrawerLink>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
