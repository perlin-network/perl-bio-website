import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeroBanner from './HeroBanner';
import YoutubeTile from './YoutubeTile';
import ImageTile from './ImageTile';
import ContactForm from '../../components/ContactForm';

import MarkImage from '../../assets/team/mark-harding-tile.jpg';
import GarryImage from '../../assets/team/garry-walsh-tile.jpg';
import HeroImage from '../../assets/hero-image.jpg';

export default function Team() {
  return (
    <Root>
      <HeroBanner />
      <Container sx={{ py: { xs: 6, md: 16 } }}>
        <Typography
          textAlign="center"
          fontSize={{ xs: 16, md: 24 }}
          fontWeight={600}
        >
          Dorjee Sun is Bioeconomy's Founder and Chief Executive Officer. Dorjee
          is a TIME Magazine Hero of the Environment, winner of the Earth Day
          Species Award and Special Advisor to the International Chamber of
          Commerce. Dorjee's tireless campaigning for the recognition of forest
          carbon as a pathway to net-zero was featured in the award-winning
          documentary The Burning Season
        </Typography>
      </Container>
      <Box>
        <YoutubeTile url="https://www.youtube.com/watch?v=t7CD1v-AzBQ">
          <Box textAlign="center">
            Understand the start of Dorjee's personal journey in the award
            winning 2009 documentary film The Burning Season
          </Box>
        </YoutubeTile>
        {/* <YoutubeTile url="https://youtu.be/AGcTCvn-a6g" inverted>
          Understand the start of Dorjee's personal journey in the award winning
          2009 documentary film The Burning Season
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          Learn more about how carbon credits are created with Bioeconomy's head
          of carbon, Ralph Streble talking about his work developing the
          Republic of Congo's ER-PIN
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g" inverted>
          Gain new insights into wildlife conservation in Africa as Bioeconomy's
          Dr. Paul Elkin is interviewed about his important work on the Great
          Elephant Census
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          Bioeconomy's co-founder Mark Harding talks about the importance of
          selecting the right methodologies and the best partners for new carbon
          projects
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g" inverted>
          Understanding the markets for carbon credits and where they are
          trending is discussed in Bioeconomy's Byron Grigoratos' regular
          “Carbon Pricing and Insights” discussion
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          How companies can better integrate carbon credits into the corporate
          responsibility agenda is discussed by Bioeconomy's chief
          communications officer Garry Walsh
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          Climate change-related litigation is on the rise, hear from
          Bioeconomy's Yen Hoang on the importance of avoiding greenwashing
        </YoutubeTile> */}
        <Grid pt={8}>
          <ImageTile src={MarkImage} id="mark" alt="Mark Harding" inverted>
            Mark Harding is Head of Projects and one of Bioeconomy’s
            co-founders. Mark has been successfully developing carbon and nature
            based projects for 15 years, leading and developing a number
            different projects across different classes. Mark also has
            specialist sustainability and biodiversity expertise, was an energy
            and resources lawyer, and holds law and biology degrees.
          </ImageTile>
          {/* <ImageTile src={ByronImage} id="byron" alt="Byron Grigoratos">
            Byron Grigoratos is Bioeconomy's Chief Commercial Officer, bringing
            16 years of capital markets, M&A, structured finance and corporate
            structuring experience to the leadership team. Byron is a former M&A
            investment banker and has held positions as regional manager and
            senior trader at one of the world’s largest commodity trading firms.
            He is a Chartered Accountant and CFA Charterholder, with a focus on
            revenue generation and business development.
          </ImageTile> */}
          <ImageTile src={GarryImage} id="garry" alt="Garry Walsh" inverted>
            Garry Walsh is Chief Communications Officer at Bioeconomy, bringing
            more than 20 years-experience in public affairs, government
            relations & strategic communications. Garry started his career in UK
            politics before spending several years in Brussels. He was formerly
            the regional chair for Asia Pacific of a global communications
            consultancy. He has worked with several governments supporting their
            sovereign economic communications.
          </ImageTile>
          {/* <ImageTile src={YenImage} id="yen" alt="Yen Hoang" inverted>
            Yen Hoang is Legal Counsel at Bioeconomy with 12 years of experience
            in federal environmental, food, and drug litigation and compliance.
            Previously, Yen served as Associate Chief Counsel for the U.S. Food
            and Drug Administration and as Attorney Advisor for the U.S.
            Environmental Protection Agency. She holds a BA in Human Biology
            from Stanford University, a JD from Cornell Law School, and is a
            member of the New York Bar.
          </ImageTile> */}
        </Grid>
      </Box>
      <ContactBg>
        <ContactForm />
      </ContactBg>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));

const ContactBg = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    width: '50%',
    background: `linear-gradient(188.62deg, rgba(17, 17, 18, 0.3) -30%, #111112 95%), url(${HeroImage}) no-repeat`,
    backgroundSize: 'cover',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      background: `none`,
    },
  },
}));

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));
