import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Root from '../components/PageRoot';

const privacyText = `
  This Policy, together with our Terms of Use, sets out how we collect and treat your personal information. By visiting our Website or accessing our Services, you are accepting and consenting to this Policy, including the described collection and handling of your personal information.

  Bioeconomy is a network aiming to democratise trading of real-world assets. Bioeconomy’s project, Bioeconomy, the Planetary Ecosystem Registration Ledger, will use blockchain technologies for real-world ecological assets.

  **How we collect personal information

  Bioeconomy (“we” or “us”) collects personal information from you in a variety of ways, including when you interact with us and when you access our Website.

  You may provide us with personal information through interactions with us, such as through the Website’s contact forms, by email, or when you provide feedback. You may provide basic information such as your name, phone number, address, and email address to enable us to send you information or responses.

  When you come to our Website, we may collect certain information such as browser type, operating system, information about your visit, browsing activity and website visited immediately before coming to our site.

  We may from time to time use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our Website. Our Website may from time to time use cookies to analyse website traffic and help us provide a better website visitor experience. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google AdWords.

  Our Website may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that Bioeconomy is not responsible for the privacy practices of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.

  We may receive personal information from third parties. If we do, we will handle it as set out in this Policy.

  You must not provide us with your personal information if you are under the age of 18 without the consent of your parent or someone who has parental authority for you. We do not knowingly collect or process the personal information of children.

  **How we use personal information

  ^^We may use your personal information for the following purposes:
  ^^to provide you with information about news or our services;
  ^^to provide you with responses to your questions or feedback;
  ^^to investigate any complaints;
  ^^to administer business activities, including provide and maintain our Services; and
  ^^for other purposes such as data analysis, including identifying usage and marketing trends.

  We may disclose your personal information in the following circumstances:
  ^^To service providers to monitor and analyse the use of our Services;
  ^^To affiliate organisations and companies to administer business activities;
  ^^To comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, legal proceedings or in response to a law enforcement agency request;
  ^^To protect and defend the rights or property of Bioeconomy;
  ^^To reasonably protect the personal safety of users and the general public; and
  ^^For any other purpose with your consent.

  If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases.

  We may use email marketing service providers to manage and send emails to you, such as Mailchimp.

  **Retention and security of personal information

  We will retain your personal information only for as long as is necessary for the purposes set out in this Policy. We will retain and use your personal information to the extent necessary to comply with any legal obligations, resolve disputes, and enforce legal agreements and policies, or for internal business purposes.

  In order to prevent unauthorised access or disclosure, we have put in place procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure. Although we take reasonable measures to safeguard against unauthorised disclosures of information, no internet-based service is completely secure and we cannot guarantee the security of your personal information. The transmission and exchange of information is carried out at your own risk.

  We will ensure that any transfers of personal data to a territory outside of Singapore will be in accordance with the Personal Data Protection Act 2012 of Singapore and its regulations (“PDPA”) so as to ensure a standard of protection to personal data that is comparable to the protection under the PDPA.

  You acknowledge that personal data that you submit for publication through our website or services may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.

  **Your rights

  If you have any questions about the processing of your personal data or about our Policy, if you do not accept the amended Policy, if you wish to withdraw any consent you have given us at any time, or if you wish to update or have access to your personal data, you are welcome to contact us in writing at admin@bioeconomy.co.

  We may ask you to verify your identity before acting on any of your requests.

  **Changes and contact


  Please be aware that we may change this Policy in the future. We may modify this Policy at any time in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Policy.

  If you have any questions or complaints about our privacy practices, you may contact us at admin@bioeconomy.co.
`;

const lastUpdated = '8 July 2021';

export default function Privacy() {
  return (
    <Root>
      <Container>
        <Typography mt={8} mb={4} textAlign="center" fontSize={32}>
          Privacy Policy
        </Typography>
        <Box sx={{ mb: 8, fontSize: '20px' }}>
          <b>
            <u>Last updated: {lastUpdated}</u>
          </b>
          {privacyText.split('\n').map((str) => {
            str = str.trim();
            if (str.trim().startsWith('**')) {
              return (
                <p>
                  <br />
                  <b>{str.slice('2')}</b>
                </p>
              );
            } else if (str.startsWith('^^')) {
              return (
                <ul style={{ marginLeft: '2%', opacity: '0.8' }}>
                  <li>{str.slice(2)}</li>
                </ul>
              );
            } else {
              return <p style={{ opacity: 0.8 }}>{str}</p>;
            }
          })}
        </Box>
      </Container>
    </Root>
  );
}
