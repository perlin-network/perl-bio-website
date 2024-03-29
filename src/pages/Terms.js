import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Root from '../components/PageRoot';

const termsText = `
  Please read these Terms of Use (“Terms”) carefully. By accessing or using https://www.bioeconomy.co/ (“the Website”) or any other domains, products, services, or content provided by Bioeconomy (“Services”), you agree to be bound by these Terms, all applicable laws and regulations, and agree that you are responsible for complying with any applicable local laws. If you do not agree with the Terms, you must stop using the Website and Services immediately.

  Bioeconomy (“us” or “we”) reserves the right to review and change these Terms at any time, for any reason, at our sole discretion. Any changes to the Terms take immediate effect from the date of their publication.

  **Privacy Policy

  Please refer to our Privacy Policy for information about how Bioeconomy collects, uses and discloses information.

  **Copyright and Intellectual Property

  The material on the Website, the Services and all of the related products of Bioeconomy are protected by intellectual property law including but not limited to copyright laws. You may use the Website for your personal, non-commercial use only. You must not copy or re-use content from the site or attempt to pass it off as your own, change the content, or unlawfully use any of the material or content found about the Services.

  Bioeconomy and any other Bioeconomy product or logo contained in the Website are trademarks of Bioeconomy and may not be copied, imitated or used, except as expressly permitted in these Terms or with the prior written permission of Bioeconomy. All other trademarks, product names and company names mentioned on the Website are property of their respective owners and may not be copied, imitated or used without the written permission of the applicable trademark holder.

  **Accuracy of materials
  Bioeconomy does not warrant that any of the materials on the Website or Services are accurate, complete or current. Reference to any products, services, processes or other information does not constitute or imply endorsement, sponsorship or recommendation by us.

  The Website may provide links to web pages and content that are not owned or controlled by us. You agree that we are not responsible or liable for any third party content.

  **General Disclaimer

  You use and rely on the information provided in the Website and Services at your own risk.
  Everything on the Website and the Services is provided to you "as is" and "as available" without warranty or condition of any kind.

  To the maximum extent permitted by law, none of the affiliates, directors, officers, employees, agents, contributors and licensors of Bioeconomy make any express or implied representation or warranty about the Services or any products or Services (including the products or Services of Bioeconomy) referred to on the Website,
  including (but is not restricted to) loss or damage you might suffer as a result of any of the following:

  ^^failure of performance, error, omission, interruption, deletion, defect, failure to correct defects, delay in operation or transmission, computer virus or other harmful component, loss of data, communication line failure, unlawful third party conduct, or theft, destruction, alteration or unauthorised access to records;
  ^^the accuracy, suitability, reliability or currency of any information on the Website, the Services, or any of its Services related products (including third party material and advertisements on the Website), including fitness for a particular purpose or noninfringement of intellectual property;
  ^^costs incurred as a result of you using the Website, the Services or any of the products of Bioeconomy; and
  ^^the Services or operation in respect to links which are provided for your convenience.
  Some jurisdictions do not allow limitations on implied warranties, and this disclaimer may not apply to you.

  **Limitation of liability
  To the maximum extent permitted by law, Bioeconomy and its affiliates, employees and agents expressly exclude all liability to you for any loss, damage (including, without limitation, damages for loss of data or profit), cost or expense incurred or arising out of using or relying on the information and whether caused by reason of any error, negligent act, omission or misrepresentation in the Information or otherwise.

  If you have any basis for recovering damages in connection with the Website or Services (including breach of these Terms), you agree that your exclusive remedy is to recover, from Bioeconomy direct damages up to $100.00. You can’t recover any other damages or losses, including direct, consequential, lost profits, special, indirect, incidental, or punitive. These limitations and exclusions apply even if this remedy doesn’t fully compensate you for any losses or fails of its essential purpose or if we knew or should have known about the possibility of the damages. To the maximum extent permitted by law, these limitations and exclusions apply to anything or any claims related to these Terms and the Services.

  Some jurisdictions do not allow limitations of liability, and these limitations may not apply to you.

  **Indemnification

  You agree to indemnify, defend and hold harmless Bioeconomy, its affiliates and contractors, and their respective directors, officers, employees, shareholders, partners and agents (collectively, the “Bioeconomy parties”) from and against all claims, damages, liability, losses, costs and expenses (including but not limited to reasonable legal fees) arising out or related to your use of the Website, any breach or alleged breach of these Terms, or your conduct in connection with the Website.

  **Severability
  If any provision of these Terms is deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions.

  **Governing Law
  The Terms are governed by the laws of Singapore. Any dispute, controversy, proceeding or claim of whatever nature arising out of or in any way relating to the Terms and the rights created hereby shall be governed, interpreted and construed by, under and pursuant to the laws of Singapore.
`;

const lastUpdated = '8 July 2021';

export default function Terms() {
  return (
    <Root>
      <Container>
        <Typography mt={8} mb={4} textAlign="center" fontSize={32}>
          Terms of Use
        </Typography>
        <Box sx={{ mb: 8, fontSize: '20px' }}>
          <b>
            <u>Last updated: {lastUpdated}</u>
          </b>
          {termsText.split('\n').map((str) => {
            str = str.trim();
            if (str.startsWith('**')) {
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
