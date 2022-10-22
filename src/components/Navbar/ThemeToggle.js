import React from 'react';
import styled from '@emotion/styled';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useTheme();

  const handleAlignment = (e, mode) => {
    if (mode !== null) {
      setColorMode(mode);
    }
  };

  return (
    <ToggleButtonGroup
      value={colorMode}
      exclusive
      onChange={handleAlignment}
      aria-label="theme"
    >
      <Button value="light" aria-label="light mode" disableRipple>
        <LightModeIcon />
      </Button>
      <Button value="dark" aria-label="dark mode" disableRipple>
        <DarkModeIcon />
      </Button>
    </ToggleButtonGroup>
  );
}

const Button = styled(ToggleButton)({
  color: 'rgba(255, 255, 255, 0.6)',
  border: 0,
  '&:hover, &.Mui-selected': {
    color: '#FFF',
    backgroundColor: 'transparent !important',
  },
  '&:first-of-type::after': {
    content: '"/"',
    position: 'absolute',
    right: 0,
    color: '#FFF',
    transform: 'translateX(50%)',
  },
});
