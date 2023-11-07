import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import BackgroundImage from '../assets/card-background.png';
import Default from '../assets/team/default.png';
import DorjeePng from '../assets/team/dorjee-sun.png';
import DorjeeQr from '../assets/team/dorjee-sun-qr.png';
import ByronPng from '../assets/team/byron-grigoratos.png';
import ByronQr from '../assets/team/byron-grigoratos-qr.png';
import AmandaQr from '../assets/team/amanda-qr.png';
import MarkPng from '../assets/team/mark-harding.png';
import MarkQr from '../assets/team/mark-harding-qr.png';
import RalphPng from '../assets/team/ralph-j-strebel.png';
import RalphQr from '../assets/team/ralph-j-strebel-qr.png';
import JoPng from '../assets/team/jo.png';
import JoQr from '../assets/team/jo-qr.png';
//import LynnPng from '../assets/team/lynn.png';
import LynnQr from '../assets/team/lynn-qr.png';
import GarryPng from '../assets/team/garry-walsh.png';
import GarryQr from '../assets/team/garry-walsh-qr.png';
import PaulPng from '../assets/team/dr-paul-elkan.png';
import PaulQr from '../assets/team/dr-paul-elkan-qr.png';

const companyData = {
  company: 'Bioeconomy Pte. Ltd.',
  address: `30 Cecil Street,
    #19-08,
    Prudential Tower,
    Singapore 049712`,
  website: 'www.bioeconomy.co',
};

const cards = {
  dorjee: {
    id: 'dorjee',
    name: 'Dorjee\nSun',
    title: 'Chief Executive\nOfficer',
    email: 'dorjee@bioeconomy.co',
    phone: '+65 9777 0416',
    image: DorjeePng,
    qrCode: DorjeeQr,
    ...companyData,
  },
  byron: {
    id: 'byron',
    name: 'Byron Grigoratos',
    title: 'Chief Commercial\nOfficer',
    email: 'byron@bioeconomy.co',
    phone: '+65 8497 6218',
    image: ByronPng,
    qrCode: ByronQr,
    ...companyData,
  },
  amanda: {
    id: 'amanda',
    name: 'Amanda\nHuynh',
    title: 'Project\nManager',
    email: 'amanda@bioeconomy.co',
    phone: '+65 8894 8041',
    image: null,
    qrCode: AmandaQr,
    ...companyData,
  },
  mark: {
    id: 'mark',
    name: 'Mark\nHarding',
    title: 'Head of\nProjects',
    email: 'mark@bioeconomy.co',
    phone: '+886 912 316 708',
    image: MarkPng,
    qrCode: MarkQr,
    ...companyData,
  },
  ralph: {
    id: 'ralph',
    name: 'Ralph\nStrebel',
    title: 'Co-Founder, Head of Carbon &\n Legal',
    email: 'ralph@bioeconomy.co',
    phone: '+1 303 476 36 18',
    image: RalphPng,
    qrCode: RalphQr,
    ...companyData,
  },
  jo: {
    id: 'jo',
    name: 'Jo\nHuynh',
    title: 'Corporate Affairs\nDirector',
    email: 'jo@bioeconomy.co',
    phone: '+65 9488 8156',
    image: JoPng,
    qrCode: JoQr,
    ...companyData,
  },
  lynn: {
    id: 'lynn',
    name: 'Lynn\nLieu',
    title: 'Finance and\nAdmin',
    email: 'lynn@bioeconomy.co',
    phone: '+65 9674 3689',
    qrCode: LynnQr,
    ...companyData,
  },
  garry: {
    id: 'garry',
    name: 'Garry\nWalsh',
    title: 'Chief Communications\nOfficer',
    email: 'garry@bioeconomy.co',
    phone: '+65 9379 4275',
    image: GarryPng,
    qrCode: GarryQr,
    ...companyData,
  },
  paul: {
    id: 'paul',
    name: 'Paul\nElkan',
    title: 'Chief Conservation\nOfficer',
    email: 'paul@bioeconomy.co',
    phone: '+1 646 785 7379',
    image: PaulPng,
    qrCode: PaulQr,
    ...companyData,
  },
};

export default function ContactCard() {
  const { cardId } = useParams();
  const data = cards[cardId];
  return (
    <Root>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 330 }}>
        <Card>
          <Link
            href="/"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: 36,
              my: 3,
            }}
          >
            <LogoSvg />
          </Link>
          <Box pt={3} pb={5}>
            <ProfilePicture src={data.image || Default} alt={data.name} />
            <Name>{data.name}</Name>
            <Title>{data.title}</Title>
            <Box my={2}>
              <ContactLink
                href={`mailto:${data.email}`}
                sx={{ textDecorationColor: '#FFF' }}
              >
                {data.email}
              </ContactLink>
              <ContactLink
                href={`tel:${data.phone.split(' ').join('')}`}
                underline="none"
              >
                {data.phone}
              </ContactLink>
            </Box>
            <Paragraph>{data.company}</Paragraph>
            {data.address.split('\n').map((addressLine, key) => (
              <Paragraph key={key}>{addressLine}</Paragraph>
            ))}
            <Paragraph>
              <Link
                href={`https://${data.website}`}
                rel="noopener noreferrer"
                target="_blank"
                sx={{ textDecorationColor: '#FFF' }}
              >
                {data.website}
              </Link>
            </Paragraph>
          </Box>
          <Box display="flex">
            <QRCode src={data.qrCode} />
          </Box>
        </Card>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#FFF',
}));

const Card = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2.5),
  color: '#fff',
  background: `#111112 url(${BackgroundImage}) no-repeat`,
  backgroundSize: 'cover',
  boxShadow: '0px 0px 10px rgba(18, 56, 102, 0.3)',
  borderRadius: 16,
}));

const ProfilePicture = styled((props) => (
  <Box {...props}>
    <img src={props.src} alt={props.alt} />
  </Box>
))(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: 164,
  height: 164,
  img: {
    maxWidth: '100%',
    height: '100%',
    borderRadius: 16,
  },
}));

const Name = styled((props) => (
  <Typography
    variant="h1"
    fontSize={40}
    fontWeight={600}
    whiteSpace="pre-line"
    {...props}
  />
))();

const Title = styled((props) => (
  <Typography
    variant="h2"
    pt={2}
    pb={3}
    fontSize={24}
    fontWeight={600}
    whiteSpace="pre-line"
    {...props}
  />
))({
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    height: 4,
    width: 124,
    background: '#E9E9ED',
  },
});

const ContactLink = styled((props) => (
  <Link display="block" fontSize={20} fontWeight={600} {...props} />
))();

const Paragraph = (props) => (
  <Typography fontSize={20} fontWeight={600} {...props} />
);

const QRCode = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: 16,
}));
