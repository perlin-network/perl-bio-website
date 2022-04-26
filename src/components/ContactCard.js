import { useParams } from 'react-router-dom';
import { Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoSvg from '../assets/Splash/logo.svg';
import DorjeePng from '../assets/About/dorjee.png';
import DorjeeQr from '../assets/CardQR/dorjee.png';
import ByronQr from '../assets/CardQR/byron.png';
import AmandaQr from '../assets/CardQR/amanda.png';
import DarrenQr from '../assets/CardQR/darren.png';
import MarkPng from '../assets/About/mark.png';
import MarkQr from '../assets/CardQR/mark.png';
import RalphPng from '../assets/About/ralph.png';
import RalphQr from '../assets/CardQR/ralph.png';

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
    name: 'Dorjee Sun',
    title: 'Chief Executive Officer',
    email: 'dorjee@bioeconomy.co',
    phone: '+6597770416',
    image: DorjeePng,
    qrCode: DorjeeQr,
    ...companyData,
  },
  byron: {
    id: 'byron',
    name: 'Byron Grigoratos',
    title: 'Chief Commercial Lead',
    email: 'byron@bioeconomy.co',
    phone: '+6584976218',
    image: null,
    qrCode: ByronQr,
    ...companyData,
  },
  amanda: {
    id: 'amanda',
    name: 'Amanda Huynh',
    title: 'Project Manager',
    email: 'amanda@bioeconomy.co',
    phone: '+6588948041',
    image: null,
    qrCode: AmandaQr,
    ...companyData,
  },
  darren: {
    id: 'darren',
    name: 'Darren Toh',
    title: 'Project Director',
    email: 'darren@bioeconomy.co',
    phone: '+6594289181',
    image: null,
    qrCode: DarrenQr,
    ...companyData,
  },
  mark: {
    id: 'mark',
    name: 'Mark Harding',
    title: 'Carbon Legal Officer',
    email: 'mark@bioeconomy.co',
    phone: '+886912316708',
    image: MarkPng,
    qrCode: MarkQr,
    ...companyData,
  },
  ralph: {
    id: 'ralph',
    name: 'Ralph Strebel',
    title: 'Carbon Lead',
    email: 'ralph@bioeconomy.co',
    phone: '+13034763618',
    image: RalphPng,
    qrCode: RalphQr,
    ...companyData,
  },
};

const useStyles = makeStyles({
  root: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '30px',
    '& .MuiLink-root': {
      color: '#91D873',
    },
  },
  logo: {
    display: 'block',
    padding: '0 0 30px',
  },
  box: {
    position: 'relative',
    margin: '60px 0',
    padding: '0 30px 30px',
    color: '#fff',
    backgroundColor: 'hsl(240deg 3% 25%)', // hsl(240deg 3% 21%)
    borderRadius: 10,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
    fontFamily: '"Bai Jamjuree", sans-serif',
  },
  image: {
    marginTop: -60,
    width: 120,
    borderRadius: 16,
  },
  name: {
    margin: '16px 0 0',
    color: '#91D873',
    fontSize: '2rem',
    fontWeight: 700,
  },
  title: {
    margin: '0 0 16px',
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  company: { marginTop: 16, fontWeight: 700 },
  qrCode: {
    marginTop: 30,
    maxWidth: '100%',
    borderRadius: 10,
  },
});

export default function ContactCard() {
  const classes = useStyles();
  const { cardId } = useParams();
  const data = cards[cardId];
  return (
    <div className={classes.root}>
      <Link href="/" className={classes.logo}>
        <img src={LogoSvg} style={{ height: 54 }} alt="Bioeconomy" />
      </Link>
      <Box className={classes.box}>
        <img className={classes.image} src={data.image} alt={data.name} />
        <Typography className={classes.name} variant="h1">
          {data.name}
        </Typography>
        <Typography className={classes.title} variant="h2">
          {data.title}
        </Typography>
        <Typography>
          <Link className={classes.email} href={`mailto:${data.email}`}>
            {data.email}
          </Link>
        </Typography>
        <Typography>
          <Link className={classes.phone} href={`tel:${data.phone}`}>
            {data.phone}
          </Link>
        </Typography>
        <Typography className={classes.company}>{data.company}</Typography>
        {data.address.split('\n').map((addressLine, key) => (
          <Typography key={key} paragraph style={{ margin: 0 }}>
            {addressLine}
          </Typography>
        ))}
        <Typography>
          <Link
            className={classes.website}
            href={`https://${data.website}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.website}
          </Link>
        </Typography>
        <img className={classes.qrCode} src={data.qrCode} alt="QR code" />
      </Box>
    </div>
  );
}
