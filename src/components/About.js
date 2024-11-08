import { Grid } from '@mui/material';
import React from 'react';
import { titleTextStyle, contentTextStyle } from '../styles/common.js';
import UnknownPng from '../assets/team/unknown.png';
import DorjeePng from '../assets/team/dorjee-sun.png';
import RalphPng from '../assets/team/ralph-j-strebel.png';
import markPng from '../assets/team/mark-harding.png';

function About() {
  const aboutInfo = [
    {
      title: 'Dorjee Sun',
      // content:"test content",
      content: `Dorjee is the founder and CEO of Bioeconomy. He is also co-founder of PERL.eco and is an advisor to blockchain projects.

            Previously as founder of Carbon Conservation, Dorjee secured $400M+ with project partners and clients such as Rio Tinto, Bank of America Merrill Lynch, Olam and Twitter. One such project in Aceh, Indonesia, won the Carbon Finance Deal of the Year award and was also the subject of an award-winning documentary, “The Burning Season”, narrated by Hugh Jackman.

            TIME Magazine named him a “Hero of the Environment” and the African Rainforest Conservancy honoured Dorjee with an Earth Day Award and by naming a newly discovered blue spotted species of chameleon from the Tanzania rainforest, the “kinyongia dorjeesuni”.

            Dorjee is on the Advisory panel of Al Gore’s Climate Reality, was the founding Secretariat of the Fire Free Alliance comprised of top oil palm companies such as Asia Pacific Resources International Holding Ltd. (APRIL), Asian Agri, Musim Mas, Wilmar, Sime Darby, IOI Corporation and NGOs PM.Haze, Rumah Pohon, IDH (The Sustainable Trade Initiative). He is also Special Advisor to the International Chamber of Commerce (ICC) and convenes the ICC Carbon Council comprising of 100+ of the top companies in the world.

            Dorjee has organized various high level conferences such as in the Green Governor’s Gala during the United Nations Framework Convention on Climate Change (UNFCCC) 13th Conference of Parties which resulted in a historic joint declaration supporting the exploration of Avoided Deforestation signed on by the Governors of Aceh, Papua, West Papua in Indonesia and Amazonas, Brazil. A Green Governors’ Roundtable together with the Asian Development Bank during the Asia-Pacific Economic Cooperation (APEC) Conference in Singapore bringing together governors and leaders from Indonesia, Malaysia, Laos and various NGOs to discuss Reducing Emissions from Deforestation in Developing Countries (REDD) and climate change.
            `,
      email: 'test@example.com',
      portrait: DorjeePng,
    },
    {
      title: 'Ralph Strebel',
      content: `Ralph has worked in the climate change sector since 2007, almost exclusively with forest carbon projects. In 2007 he began to advise Carbon Conservation Pte Ltd and became a full-time employee in 2008, going on to lead the Forest Carbon team from 2009-2014.
            \n
            During that time frame as VP of Forest Carbon, he led the company’s forest carbon projects. Ralph has substantial experience in all aspects of forest carbon projects, from assessments to project development, from origination on through ongoing monitoring, reporting and verification (MRV). He successfully developed the world’s first REDD+ Improved Forest Management project in Africa, worked assessing and developing numerous large-scale REDD+ projects in Indonesia and was the lead author of the Republic of Congo’s successful application to join the World Bank’s Forest Carbon Partnership Facility, including establishing the National Reference Emission Levels for the country.

            Ralph is a long-term board member of the Greenhouse Gas Management Institute (GHGMI) and is currently chair-person of the Board. GHGMI’s work involves educating on the basics of GHG accounting, auditing and management, training professionals to meet the highest standards of expertise and ethical conduct, and conducting forward-looking research into critical GHG measurement, reporting, and verification (MRV) issues. Ralph is also an experienced trial lawyer, having over a decade of courtroom experience in trial courts in Arizona and Colorado and has been lead counsel on a number of published appellate court opinions from the Colorado Court of Appeals and Colorado Supreme Court.

            Ralph holds degrees from the University of Colorado – Boulder (International Affairs / Political Science) and Lancaster University (Hons. Law). He is a licensed attorney in the States of Colorado and Arizona as well as being a qualified solicitor in England and Wales.

            `,
      email: 'test@example.com',
      portrait: RalphPng,
    },
    {
      title: 'Mark Harding',
      content: `Mark has always been passionate about nature and the outdoors and has spent his career at the intersection of the environment and business. Educated in marine ecology and law, Mark’s specialist expertise is in sustainability, carbon project development and biodiversity with a special interest in primary industry given his own farming background.

            Fluent in Mandarin, Mark spent about 15 years working across Asia. Mark worked in Shanghai as a Climate Change and Energy and Resources lawyer for a large multinational law firm where he was responsible for developing their Greater China climate change practice.

            Mark was a pioneer in the carbon industry being involved since 2007 when he started his own CDM project development company in China, and later joined Carbon Conservation, and oversaw their non-forest carbon project pipeline working throughout Asia and worldwide on carbon development projects. These included demand side efficiency, renewable energy, industrial fuel switching, coal mine methane, biomass, waste water and a variety of land use projects.

            In addition to carbon development, Mark has worked with a variety of large agribusiness, forestry, mining and manufacturing clients in relation to sustainability matters, assisting many large clients develop their sustainability programs and reporting frameworks.

            Mark also has experience in New Zealand working as a resource management lawyer, across a variety of infrastructure and land use projects representing both developers and local government authorities. Mark is currently based in Tauranga, New Zealand.
            `,
      email: 'test@example.com',
      portrait: markPng,
    },
  ];

  return (
    <div
      className="about-container"
      style={{ backgroundColor: '#333336', padding: '5% 5%' }}
    >
      <div
        className="about-header"
        style={{ ...titleTextStyle, fontSize: '48px' }}
      >
        Who we are
      </div>
      <div
        className="about-text"
        style={{ ...contentTextStyle, fontSize: '32px', marginTop: '25px' }}
      >
        Bioeceonomy has expertise in advising and leading businesses on their
        ecological projects. With significant experience in the climate change
        sector, Bioeconomy is focusing on helping businesses reach their
        sustainability goals.
      </div>
      <Grid className="about-grid" style={{ marginTop: '64px' }}>
        {aboutInfo.map((i) => {
          return (
            <Grid
              item
              style={{
                background:
                  ' linear-gradient(180deg, #3C423C 0%, rgba(51, 51, 54, 0) 100%)',
                borderRadius: '16px',
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                key={i.title}
                style={{
                  maxWidth: '100%',
                  marginBottom: '50px',
                  padding: '5% 2%',
                }}
              >
                <Grid item style={{ margin: '20px 3%' }}>
                  <img
                    src={i.portrait}
                    alt={UnknownPng}
                    style={{
                      height: '100%',
                      maxHeight: '140px',
                      borderRadius: '16px',
                    }}
                  />
                </Grid>
                <Grid item style={{ maxWidth: '75%' }}>
                  <p
                    className="grid-title-text"
                    style={{
                      ...contentTextStyle,
                      margin: '20px 5%',
                      justifyContent: 'flex-start',
                      color: '#A5AFA8',
                    }}
                  >
                    {i.title}
                  </p>
                  <div
                    className="grid-content-text"
                    text={i.content}
                    style={{
                      ...contentTextStyle,
                      marginLeft: '5%',
                      marginRight: '5%',
                      marginTop: '50px',
                      fontSize: '18px',
                    }}
                  >
                    {i.content.split('\n').map((str) => {
                      return <p>{str}</p>;
                    })}
                  </div>
                </Grid>
                {/* <Grid item justify='flex-end'>
                                    <div className='grid-email-text' style={{...contentTextStyle, justifyContent:"flex-end", fontSize:"18px", color:"#91D873" }}>
                                        <hr style={{marginTop:"32px", justifyContent:"flex-end", maxWidth:"96px"}}/>
                                        {i.email}
                                    </div>
                                </Grid>  */}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default About;
