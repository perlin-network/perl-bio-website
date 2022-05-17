import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const SectionTitle = styled((props) => <Typography variant="h2" {...props} />, {
  shouldForwardProp: (prop) => prop !== 'centered',
})(({ theme, centered }) => ({
  position: 'relative',
  paddingTop: 28,
  fontSize: 30,
  fontWeight: 700,
  ...(centered && { textAlign: 'center' }),
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 72,
    height: 4,
    ...(centered && { margin: '0 auto' }),
    backgroundColor: theme.palette.primary.light,
    borderRadius: 4,
  },
}));

export default SectionTitle;
