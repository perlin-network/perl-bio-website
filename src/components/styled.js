import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const PageTitle = styled((props) => (
  <Typography variant="h1" {...props} />
))(({ theme }) => ({
  fontSize: 40,
  fontWeight: 700,
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
}));

export const PageTitleParagraph = styled(Typography)(({ theme }) => ({
  marginTop: 24,
  marginBottom: 16,
  fontSize: 28,
  lineHeight: 1.4,
  [theme.breakpoints.down('md')]: {
    marginTop: 16,
    fontSize: 18,
  },
}));

export const SectionTitle = styled(
  (props) => <Typography variant="h2" {...props} />,
  {
    shouldForwardProp: (prop) => prop !== 'centered',
  }
)(({ theme, centered }) => ({
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
