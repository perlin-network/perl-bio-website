import GorillaProject from '../assets/projects/project-gorilla.png';
import GorillaProject2x from '../assets/projects/project-gorilla@2x.png';
import TigerProject from '../assets/projects/project-tiger.png';
import TigerProject2x from '../assets/projects/project-tiger@2x.png';
import SumatraProject from '../assets/projects/project-sumatra.png';
import SumatraProject2x from '../assets/projects/project-sumatra@2x.png';

const projects = [
  {
    id: 'gorilla',
    title: 'Under development: Gorilla project',
    location: 'North-western portion of Congo River Basin, Republic of Congo',
    size: '92,530 hectares',
    biodiversity:
      'Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard',
    image: GorillaProject,
    imageHiRes: GorillaProject2x,
  },
  {
    id: 'tiger',
    title: 'Under development: Tiger project',
    location: 'Kampar Peninsula, Indonesia',
    size: '130,090 hectares, twice the size of Singapore',
    biodiversity:
      "Sumatran Tiger, Storm's Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat",
    image: TigerProject,
    imageHiRes: TigerProject2x,
  },
  {
    id: 'sumatra',
    title: 'Case study: Sumatra',
    description: `Tiger Carbon restores and protects 130,090 hectares of peatland ecosystem located in the Kampar Peninsula, Indonesia, an area twice the size of Singapore.
    The Project is made up of four former logging concessions spread across two landscapes in eastern Sumatra and is dominated by peat swamp forests.
    The Project’s largest lake measures 8 kilometres in length and  the conservation work protects over 797 species of animals and plant`,
    image: SumatraProject,
    imageHiRes: SumatraProject2x,
  },
];

export default projects;
