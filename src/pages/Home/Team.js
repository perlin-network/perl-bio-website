import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import data from '../../data/team';

export default function Team() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Root component="section">
      <Container>
        <Headline mt={{ xs: 14, md: 26 }} mb={{ xs: 14, md: 18 }}>
          Made possible by a team of highly-skilled professionals with decades
          of experience creating nature-based climate solutions
        </Headline>
      </Container>
      <Box>
        <ImageList cols={isMobile ? 2 : 4} rowHeight={360} gap={0}>
          {data.map((item) => (
            <TeamMember key={item.id}>
              <Link
                href={`/team#${item.id}`}
                sx={{
                  display: 'block',
                  height: 360,
                  '&:hover img': {
                    transform: 'scale(1.05)',
                    transition: '0.15s ease-out',
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: '100%', height: '100%' }}
                />
                <ImageListItemBar title={item.name} subtitle={item.title} />
              </Link>
            </TeamMember>
          ))}
        </ImageList>
      </Box>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  paddingBottom: 150,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingBottom: 64,
  },
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 52 / 36,
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    lineHeight: 38 / 24,
  },
}));

const TeamMember = styled(ImageListItem)(({ theme }) => ({
  overflow: 'hidden',
  '.MuiImageListItemBar-title': {
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  '.MuiImageListItemBar-subtitle': {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 8,
    },
  },
}));
