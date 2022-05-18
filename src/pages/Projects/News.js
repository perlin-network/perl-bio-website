import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import news from '../../data/news';

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '40px',
  paddingRight: '40px',
  marginBottom: '-150px',
  '.slick-slider .slick-track': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
  },
  '.slick-slider .slick-slide': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  },
  '.slick-slide > div': {
    margin: theme.spacing(2),
    height: '100%',
  },
}));

const PrevArrow = ({ currentSlide, slideCount, className, ...props }) => (
  <Box
    visibility={!className?.includes('slick-disabled') ? 'visible' : 'hidden'}
    sx={{
      position: 'absolute',
      top: '40%',
      left: -40,
      color: '#fff',
      cursor: 'pointer',
    }}
    {...props}
  >
    <ArrowCircleLeftOutlinedIcon
      sx={{
        width: 40,
        height: 40,
      }}
    />
  </Box>
);

const NextArrow = ({ currentSlide, slideCount, className, ...props }) => (
  <Box
    visibility={!className?.includes('slick-disabled') ? 'visible' : 'hidden'}
    sx={{
      position: 'absolute',
      top: '40%',
      right: -40,
      color: '#fff',
      cursor: 'pointer',
    }}
    {...props}
  >
    <ArrowCircleRightOutlinedIcon
      sx={{
        width: 40,
        height: 40,
      }}
    />
  </Box>
);

const NewsItem = ({ title, image }) => (
  <Paper
    elevation={6}
    sx={{
      p: 3,
      height: '100%',
      borderRadius: '16px',
    }}
  >
    {image && (
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: 176,
          objectFit: 'cover',
          marginBottom: 16,
        }}
      />
    )}
    <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{title}</Typography>
  </Paper>
);

function News() {
  const settings = {
    // infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSlides = useCallback(
    () => news.map((n) => <NewsItem key={n.title} {...n} />),
    []
  );

  return (
    <Root>
      <Slider {...settings}>{renderSlides()}</Slider>
    </Root>
  );
}

export default News;
