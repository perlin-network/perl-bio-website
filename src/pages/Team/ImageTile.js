import React from 'react';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function ImageTile({ id, src, alt, inverted, children }) {
  return (
    <Stack id={id}>
      <Media>
        <img src={src} alt={alt} />
      </Media>
      <Details>{children}</Details>
    </Stack>
  );
}

const Media = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: 360,
  [theme.breakpoints.down('md')]: {
    minHeight: 300,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(90deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(180deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    },
  },
  '& img': {
    maxWidth: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const Details = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(8)} ${theme.spacing(12)}`,
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.5,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(2),
    fontSize: 16,
  },
}));
