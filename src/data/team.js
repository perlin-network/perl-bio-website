import DorjeePng from '../assets/team/dorjee-sun.png';
import DorjeeQr from '../assets/team/dorjee-sun-qr.png';
import RalphPng from '../assets/team/ralph-j-strebel.png';
import RalphQr from '../assets/team/ralph-j-strebel-qr.png';
import MarkPng from '../assets/team/mark-harding.png';
import MarkQr from '../assets/team/mark-harding-qr.png';
import PaulPng from '../assets/team/dr-paul-elkan.png';
import GarryPng from '../assets/team/garry-walsh.png';
import ByronPng from '../assets/team/byron-grigoratos.png';
import ByronQr from '../assets/team/byron-grigoratos-qr.png';
import AnniePng from '../assets/team/annie-ye.png';

const team = [
  {
    id: 'dorjee',
    name: 'Dorjee Sun',
    title: 'CEO and Founder',
    image: DorjeePng,
    qrCode: DorjeeQr,
    experience: [
      'TIME magazine Hero of the Environment',
      'Winner of the Earth Day Species Award',
      'Advisor to Al Gore’s Climate Reality Australia',
      'Special Advisor to the International Chamber of Commerce',
      'Founding Secretariat of the Fire Free Alliance',
      'Subject of Hugh Jackman narrated documentary “The Burning Season”',
    ],
  },
  {
    id: 'ralph',
    name: 'Ralph J Strebel',
    title: 'Co-founder, Head of Carbon & Legal Counsel',
    image: RalphPng,
    qrCode: RalphQr,
    experience: [
      'Lead advisor to Carbon Conservation',
      'Chairman of Greenhouse Gas Management Institute (GHGMI)',
      'Developed the world’s first REDD+ Improved Forest Management project in Africa',
      'Lead author of the Republic of Congo’s successful application to join the World Bank’s',
      'Forest Carbon Partnership Facility',
      'Head of Carbon at Perlin',
    ],
  },
  {
    id: 'mark',
    name: 'Mark Harding',
    title: 'Co-founder and Project Lead',
    image: MarkPng,
    qrCode: MarkQr,
    experience: [
      'Head of CDM & Sustainability at Carbon Conservation',
      'Pioneer in the carbon industry since 2007',
      'Started his own CDM project development company in China',
      'Specialist in sustainability, carbon project development and biodiversity',
      'Barrister and Solicitor of the High Courts of New South Wales, Australia & New Zealand',
      'BSc major in Biology and Ecology from the University of Auckland',
    ],
  },
  {
    id: 'byron',
    name: 'Byron Grigoratos',
    title: 'Chief Commercial Officer',
    image: ByronPng,
    qrCode: ByronQr,
    experience: [
      'Former Country Manager & Senior Trader at Glencore International focusing on commodity trading & business development',
      'Former Investment Banker at Investec Private Bank',
      'Strong capital markets, M&A, structured finance & corporate structuring experience',
      'Chartered Accountant and CFA Charterholder',
    ],
  },
  {
    id: 'paul',
    name: 'Dr Paul Elkan',
    title: 'Chief Conservation Officer',
    image: PaulPng,
    qrCode: null,
    experience: [
      'Former lead director for Wildlife',
      '30 years of conservation and wildlife protection of Central and East Africa and the Sudano-Sahel region',
      'Led c. $200 million conservation funding from well known bilateral, multilateral, and private donors in Africa',
      'Lead director for Wildlife Conservation Society and responsible for several aerial survey efforts as part of the Great Elephant Census + analysis of conservation security for multiple regions',
      'PHD in Conservation Biology & US FAA Commercial Pilot',
    ],
  },
  {
    id: 'garry',
    name: 'Garry Walsh',
    title: 'Chief Communications Officer',
    image: GarryPng,
    qrCode: null,
    experience: [
      '20 years in communication & public relations',
      'Led the economic communications for Republic of Philippines',
      'Lead consultant for clients including Microsoft, eBay and TEPCO',
      'Previously APAC Regional Chair for a global communications consultancy',
      'Former member of the Westminster City Council',
      'Winner of several PR & communications awards',
    ],
  },
  {
    id: 'annie',
    name: 'Annie Ye',
    title: 'Financial Analyst',
    image: AnniePng,
    qrCode: null,
    experience: [
      '20 years of experience in corporate finance, strategy and economics',
      'Former commercial advisor at BP America and Treasury advisor at BP Singapore',
      'Former investment account analyst at Goldman Sachs affiliates',
      'Specialized in Financial Modeling and Analysis. Led a number of oil and gas major project developments, M&A activities in North America, and project financing in Asia (all $2bn+ scope)',
      'PhD in Biology and MBA; 10+ journal and book publications',
    ],
  },
];

export default team;
