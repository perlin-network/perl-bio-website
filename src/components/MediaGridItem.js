import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

const MediaGridItem = styled(
  (props) => <Grid item xs={12} md={6} {...props} />,
  {
    shouldForwardProp: (prop) => prop !== 'inverted',
  }
)(({ theme, inverted }) => ({
  position: 'relative',
  minHeight: 720,
  [theme.breakpoints.down('md')]: {
    minHeight: 375,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: inverted
      ? `linear-gradient(270deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`
      : `linear-gradient(90deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(180deg, rgba(17, 17, 18, 0.1) 60%, ${theme.palette.background.default} 100%)`,
    },
  },
  '& video': {
    objectFit: 'cover',
  },
}));

export default MediaGridItem;
