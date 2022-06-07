import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import data from '../../data/projects';

const Image = ({ theme, ...project }) => {
  const srcProps = {
    src: project.image,
    ...(project.imageHiRes && {
      srcSet: `${project.imageHiRes} 2x`,
    }),
  };
  return (
    <Box
      component="figure"
      m={0}
      sx={{
        width: { lg: 400, md: 352, sm: 232, xs: '100%' },
        mr: { lg: '75px', sm: '32px' },
      }}
    >
      {project.image ? (
        <img
          {...srcProps}
          alt={project.title}
          style={{ width: '100%', maxWidth: '100%', borderRadius: 16 }}
        />
      ) : (
        <Placeholder />
      )}
    </Box>
  );
};

const Placeholder = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxHeight: 240,
  '&:before': {
    content: '""',
    display: 'block',
    width: '100%',
    paddingTop: `${(5 / 3) * 100}%`,
  },
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'hsl(0deg 0% 90%)',
    borderRadius: '16px',
  },
}));

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

const Description = styled('div')({
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
      {[...data].reverse().filter((p) => p.id !== 'tiger').map((p, index) => (
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
            {p.description && (
              <Description>
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </Description>
            )}
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
