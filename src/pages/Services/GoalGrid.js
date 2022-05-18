import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Goal01 from '../../assets/services/goal-01.png';
import Goal03 from '../../assets/services/goal-03.png';
import Goal05 from '../../assets/services/goal-05.png';
import Goal08 from '../../assets/services/goal-08.png';
import Goal10 from '../../assets/services/goal-10.png';
import Goal11 from '../../assets/services/goal-11.png';
import Goal13 from '../../assets/services/goal-13.png';
import Goal14 from '../../assets/services/goal-14.png';
import Goal15 from '../../assets/services/goal-15.png';
import Goal17 from '../../assets/services/goal-17.png';

const list = [
  {
    title: 'No poverty',
    text: 'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty on all its dimensions according to national definitions',
    image: Goal01,
  },
  {
    title: 'Good health and well-being',
    text: 'Ensure healthy lives and promote well-being for all at all ages',
    image: Goal03,
  },
  {
    title: 'Gender equality',
    text: 'Achieve gender quality and empower all women and girls',
    image: Goal05,
  },
  {
    title: 'Decent work and economic growth',
    text: 'Promote sustained and sustainable economic growth, full and productive employment and decent work for all',
    image: Goal08,
  },
  {
    title: 'Reduced inequalities',
    text: 'Requcing inequalities and ensuring no one is left behind are integral to achieving the Sustainable Development Goals',
    image: Goal10,
  },
  {
    title: 'Sustainable cities and communities',
    text: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
    image: Goal11,
  },
  {
    title: 'Climate action',
    text: 'Take urgent action to combat climate change and its impacts',
    image: Goal13,
  },
  {
    title: 'Life below water',
    text: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
    image: Goal14,
  },
  {
    title: 'Life on land',
    text: 'Protect, restore and promote sustainable use of terrestrial ecosystems',
    image: Goal15,
  },
  {
    title: 'Partnership for the goals',
    text: 'Protect, restore and promote sustainable use of terrestrial ecosystems',
    image: Goal17,
  },
];

const Title = styled((props) => <Typography variant="h3" {...props} />)(
  ({ theme }) => ({
    padding: '8px 0 12px',
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  })
);

function GoalGrid() {
  return (
    <Grid container justifyContent="space-around">
      {list.map((item, index) => (
        <Grid item key={index} lg={4} sm={6} xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            margin="auto"
            sx={{
              maxWidth: 280,
              px: '12px',
              pb: index === list.length - 1 ? 0 : { md: '56px', xs: '40px' },
            }}
          >
            <img src={item.image} alt={item.text} style={{ width: 200 }} />
            <Title>{item.title}</Title>
            <Typography>{item.text}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default GoalGrid;
