import GorillaProject from '../assets/projects/project-gorillanew.png';
import GorillaProject2x from '../assets/projects/project-gorillanew@2x.png';
import TigerProject from '../assets/projects/project-tigernew.png';
import TigerProject2x from '../assets/projects/project-tigernew@2x.png';
import IndonesianAgricultureProject from '../assets/projects/project-indonesian-agriculture.png';
import IndonesianAgricultureProject2x from '../assets/projects/project-indonesian-agriculture@2x.png';
import SumatraProject from '../assets/projects/project-sumatra.png';
import SumatraProject2x from '../assets/projects/project-sumatra@2x.png';
import HawksbillProject from '../assets/projects/project-hawksbill.jpeg';
import HornbillProject from '../assets/projects/project-hornbill.jpeg';

const projects = [
  {
    id: 'indonesian-agriculture',
    title: 'Case study: Indonesian Agriculture',
    description:
      'Bioeconomy worked together with a world leading palm oil producer to successfully register a Clean Development Mechanism (CDM) Program of Activities (PoA) under the UNFCCC which allows any co-composting project of palm oil waste in Indonesia to be registered under it.\n\nSince 2013, a state-of-the-art Aerated Bunker Co-composting has been registered under this PoA composting liquid palm oil mill effluent and empty fruit bunches avoiding a significant amount of emissions that would have otherwise occurred from methane under the traditional ponding system and converting this waste into rich organic compost which is applied into the field.\n\nCurrently this project has been successfully verified and has had 27,565 Certified Emission Reduction Units issued (CERs). This was the first Co-composting PoA in Indonesia to successfully be issued CERs.',
    image: IndonesianAgricultureProject,
    imageHiRes: IndonesianAgricultureProject2x,
  },
  {
    id: 'sumatra',
    title: 'Case study: Sumatra',
    description:
      "Tiger Carbon restores and protects 130,090 hectares of peatland ecosystem located in the Kampar Peninsula, Indonesia, an area twice the size of Singapore.\n\nThe Project is made up of four former logging concessions spread across two landscapes in eastern Sumatra and is dominated by peat swamp forests.\n\nThe Project's largest lake measures 8 kilometres in length and  the conservation work protects over 797 species of animals and plant",
    image: TigerProject,
    imageHiRes: TigerProject2x,
  },
  {
    id: 'hawksbill',
    title: 'Hawksbill project',
    location: 'Queensland, Australia',
    size: '30,000 hectares',
    biodiversity:
      'Hawksbill Turtle, Swift Parrot, Koala, Grey Snake, Northern Quoll',
    image: HawksbillProject,
    imageHiRes: null,
  },
  {
    id: 'hornbill',
    title: 'Under Development: Hornbill project',
    location: 'Kalimantan, Indonesia',
    size: '53,000 hectares',
    biodiversity:
      'Helmeted Hornbill, Proboscis Monkey, Bornean White-bearded Gibbon; Hairy-nosed Otter',
    image: HornbillProject,
    imageHiRes: null,
  },
  {
    id: 'gorilla',
    title: 'Gorilla project',
    location: 'North-western portion of Congo River Basin, Republic of Congo',
    size: '92,530 hectares',
    biodiversity:
      'Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard',
    image: GorillaProject,
    imageHiRes: GorillaProject2x,
  },
  {
    id: 'tiger',
    title: 'Tiger project',
    location: 'Kampar Peninsula, Indonesia',
    size: '130,090 hectares, twice the size of Singapore',
    biodiversity:
      "Sumatran Tiger, Storm's Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat",
    image: TigerProject,
    imageHiRes: TigerProject2x,
  },
];

export default projects;
