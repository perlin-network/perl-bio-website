import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeroBanner from './HeroBanner';
import YoutubeTile from './YoutubeTile';
import ImageTile from './ImageTile';
import ContactForm from '../../components/ContactForm';

import RalphImage from '../../assets/team/ralph-j-strebel-tile.jpg';
import PaulImage from '../../assets/team/dr-paul-elkan-tile.jpg';
import MarkImage from '../../assets/team/mark-harding-tile.jpg';
import ByronImage from '../../assets/team/byron-grigoratos-tile.jpg';
import GarryImage from '../../assets/team/garry-walsh-tile.jpg';
import DarrenImage from '../../assets/team/darren-toh-tile.jpg';
import YenImage from '../../assets/team/yen-hoang-tile.jpg';
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
          Dorjee Sun, is Bioeconomy's founder and Chief Executive Officer.
          Dorjee is a TIME Magazine Hero of the Environment, winner of the Earth
          Day Species Award and Special Advisor to the International Chamber of
          Commerce. Dorjee's tireless campaigning for the recognision of forest
          carbon as a pathway to net-zero was featured in the award-winning
          documentary The Burning Season
        </Typography>
      </Container>
      <Box>
        <YoutubeTile url="https://www.youtube.com/watch?v=t7CD1v-AzBQ">
          Understand the start of Dorjee's personal journey in the award winning
          2009 documentary film The Burning Season
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
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g" inverted>
          Lean how technology is changing the shape of community engagement with
          Bioeconomy's Darren Toh talking about the development of the Green
          Guardian App
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          Climate change-related litigation is on the rise, hear from
          Bioeconomy's Yen Hoang on the importance of avoiding greenwashing
        </YoutubeTile> */}
        <ImageTile src={RalphImage} alt="Ralph Streble" inverted>
          Ralph Streble is Head of Carbon and Chief Legal Officer as-well-as
          being one of Bioeconomy's co-founders. Ralph is Chairman of the
          Greenhouse Gas Management Institute (GGMI) as well as being a Director
          of Greenlaw International. He developed the world's first REDD+
          Improved Forest Management project in Africa and was the lead author
          of the Republic of Congo's successful application to join the World
          Bank's Forest Carbon Partnership Facility.
        </ImageTile>
        <ImageTile src={PaulImage} alt="Dr Paul Elkin">
          Dr Paul Elkin is Bioeconomy's Chief Conservation Officer, bringing
          more that 30 years experience in conservation and wildlife protection
          in Central and East Africa and the Sudano-Sahel region. Paul is lead
          director for the Wildlife Conservation Society and responsbile for
          several aerial surveys as part of the Great Elephant Census as well as
          analysis or conservation security across multiple regions.
        </ImageTile>
        <ImageTile src={MarkImage} alt="Mark Harding" inverted>
        Mark Harding is a co-founder of Bioeconomy and 
        specialist in sustainability, carbon project development 
        and biodiversity. Mark is head of Sustainablitiy & CDM 
        at leading carbon conservation companies since 2008.  
        His is a Barrister and Solicitor of the High Courts of New 
        South Wales, Australia and New Zealand and founded 
        CDM management company in China.  Mark holds an 
        LLB Hons, BSc major in Biology and Ecology, University of 
        Auckland.
        </ImageTile>
        <ImageTile src={ByronImage} alt="Byron Grigoratos">
          Byron Grigoratos is Bioeconomy's Chief Commercial Officer bringing 16
          years of capital markets, M&A, structured finance & corporate
          structuring experience to the leadership team. Byron is a former M&A
          investment banker and former country manager and senior trader at one
          of the world latest commodity trading firms. Byron is a Chartered
          Accountant and CFA Charterholder
        </ImageTile>
        <ImageTile src={GarryImage} alt="Garry Walsh" inverted>
          Garry Walsh is Chief Communications Officer at Bioeconomy, bringing
          more than 20 years experience in public affairs, government relation &
          strategic communications. Garry started his career in UK politics
          before spending several years in Brussels. He was formerly the
          regional chair for Asia Pacific of a global communications
          consultancy. He has worked with several governments supporting their
          sovereign economic communications.
        </ImageTile>
        <ImageTile src={DarrenImage} alt="Darren Toh">
          Darren Toh is Project Director at Bioeconomy with a strong focus on
          technology and innovation. Darren is a veteran lawyer, previously
          working for the Australian Competition Commission, NSW Ombudsman and
          KPMG. He is a co-founder of PERL.eco and Blockcoms PR and advisor to
          several high profile blockchain projects.
        </ImageTile>
        <ImageTile src={YenImage} alt="Yen Hoang" inverted>
          Yen Hoang is In-House Counsel at Bioeconomy with 12 years experience
          in environmental, food and drug litigation and regulatory compliance.
          Yen is a former Associate Chief Counsel for the U.S. Food and Drug
          Administration and former Attorney Advisor to the U.S. Environmental
          Protection Agency. She is a graduate of Stanford University, Cornell
          Law School and a Member of the New York Bar.
        </ImageTile>
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
