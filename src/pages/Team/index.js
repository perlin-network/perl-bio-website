import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import HeroBanner from './HeroBanner';
import YoutubeTile from './YoutubeTile';
import ContactForm from '../../components/ContactForm';

export default function Team() {
  return (
    <Root>
      <HeroBanner />
      <Box>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g">
          Learn what's new in the bioeconomy and conservation capital in CEO
          Dorjee Sun's monthly viewpoints discussion
        </YoutubeTile>
        <YoutubeTile url="https://youtu.be/AGcTCvn-a6g" inverted>
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
        </YoutubeTile>
      </Box>
      <ContactForm />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));
