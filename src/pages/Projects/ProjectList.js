import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import data from '../../data/projects';

const Image = ({ ...project }) => (
  <Box
    component="figure"
    m={0}
    sx={{
      width: { lg: 400, md: 352, sm: 232, xs: '100%' },
      mr: { lg: '75px', sm: '32px' },
    }}
  >
    <img
      srcSet={`${project.imageHiRes} 2x`}
      src={project.image}
      alt={project.title}
      style={{ width: '100%', maxWidth: '100%' }}
    />
  </Box>
);

const Title = styled((props) => <Typography variant="h3" {...props} />)(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  })
);

const Description = styled(Typography)({
  marginTop: '1rem',
  fontSize: 20,
});

const Details = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  fontSize: 20,
  '& > li': {
    marginTop: '1rem',
  },
});

const InfoRow = (props) => (
  <li>
    <div>
      <strong>{props.name}</strong>
    </div>
    <div>{props.children}</div>
  </li>
);

function ProjectList() {
  return (
    <Box>
      {[...data].reverse().map((p, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          sx={{
            mb: index === data.length - 1 ? 0 : { sm: '48px', xs: '32px' },
          }}
        >
          <Image {...p} />
          <Box flex="1">
            <Title>{p.title}</Title>
            {p.description && <Description>{p.description}</Description>}
            <Details>
              {p.location && <InfoRow name="Location:">{p.location}</InfoRow>}
              {p.size && <InfoRow name="Size:">{p.size}</InfoRow>}
              {p.biodiversity && (
                <InfoRow name="Biodiversity:">{p.biodiversity}</InfoRow>
              )}
            </Details>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ProjectList;
