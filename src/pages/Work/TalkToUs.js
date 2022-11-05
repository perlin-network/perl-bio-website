import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// import { ReactComponent as LogoCompact } from '../../assets/logo-compact.svg';

export default function TalkToUs({ top, width }) {
  return (
    <Root top={top} width={width}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={12}
        maxWidth={300}
      >
        <Typography
          mb={8}
          textAlign="center"
          fontSize={{ xs: 22, md: 40 }}
          fontWeight={700}
        >
          talk to us
          <br />
          to learn more
        </Typography>
        <ContactButton
          href="/contact"
          variant="contained"
          size="large"
          endIcon={<PlayArrowRoundedIcon />}
        >
          Contact us
        </ContactButton>
        {/* <Box pt={10}>
          <LogoCompact />
        </Box> */}
      </Box>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'absolute',
  // top: 240,

  // width: 580,
  [theme.breakpoints.up('md')]: {
    right: 0,
    bottom: 0,
  },
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    width: '100%',
    marginTop: theme.spacing(8),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '50vw',
    border: '1px solid #FFF',
    borderRight: 'none',
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: '14px 44px',
  color: '#000',
  background: 'rgb(207, 207, 208)',
  fontSize: 24,
  textTransform: 'none',
  '& .MuiButton-endIcon > svg': {
    fontSize: 32,
  },
}));
