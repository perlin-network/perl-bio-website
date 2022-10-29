import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import { navbarHeight, navbarHeightSmall } from '../theme';

const PageRoot = styled(Box)(({ theme }) => ({
  paddingTop: navbarHeight,
  [theme.breakpoints.down('md')]: {
    paddingTop: navbarHeightSmall,
  },
}));

export default PageRoot;
