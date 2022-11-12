import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const gradient = (side, theme) => {
  switch (side) {
    case 'left':
      return `linear-gradient(270deg, rgba(17, 17, 18, 0.1) 50%, ${theme.palette.background.default} 100%)`;
    case 'right':
    default:
      return `linear-gradient(90deg, rgba(17, 17, 18, 0.1) 50%, ${theme.palette.background.default} 100%)`;
  }
};

const ShadowBox = styled(Box)(({ theme, side }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: gradient(side, theme),
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(180deg, rgba(17, 17, 18, 0.1) 50%, ${theme.palette.background.default} 100%)`,
    },
  },
}));

export default ShadowBox;
