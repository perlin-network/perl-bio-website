import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

const DetailsGridItem = styled(
  (props) => <Grid item xs={12} md={6} {...props} />,
  {
    shouldForwardProp: (prop) => prop !== 'inverted',
  }
)(({ theme, inverted }) => ({
  order: inverted ? 1 : 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: inverted ? 'right' : 'left',
  [theme.breakpoints.down('md')]: {
    order: 2,
    textAlign: 'center',
  },
}));

export default DetailsGridItem;
