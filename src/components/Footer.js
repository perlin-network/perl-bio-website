import React from 'react'
import { Grid } from '@material-ui/core'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import {contentTextStyle, verticalDividedrStyle} from '../styles/common.js'

import FooterIcon from '../assets/Footer/FooterIcon.svg'


function Footer() {
    return (
        <div className='footer-container' style={{background:"#333336", paddingTop:"120px", paddingBottom:'30px'}}>
            <div className='footer-content' style={{margin:'0% 5%', display:'flex', justifyContent:'space-between'}}>
                <div className='footer-left-content' style={{justifyContent:'flex-start', ...contentTextStyle}}>
                <Grid container direction='row' style={{marginTop:"15px"}}>
                    <Grid item>                        
                    <div className='social-icon-wrapper' style={{display:"flex", justifyContent:"space-between",}}>
                        {/* <div className='social-icon' style={{marginRight:'60px'}}>
                            <TwitterIcon fontSize="large"/>
                        </div>
                        <div className='social-icon' style={{marginRight:'32px'}}>
                            <TelegramIcon fontSize="large"/>
                        </div> */}
                    </div>
                    </Grid>
                    {/* <div className='vertical-divider' style={{...verticalDividedrStyle}}/>             */}
                    <Grid item>
                    {/* </div> */}
                    {/* <div className='footer-icon-wrapper'> */}
                        <img src={FooterIcon} alt='' style={{maxHeight:"40px", minWidth:"175px"}}/>
                    {/* </div> */}
                    </Grid>

                </Grid>
                </div>
                <div className='footer-right-content' justify='flex-end' style={{justifyContent:'flex-end', ...contentTextStyle, maxHeight:"24px", marginTop:'25px',  fontSize:'12px'}}>
                    Copyright © Bioeconomy {new Date().getFullYear()}. All rights reserved
                </div>
            </div>
            
        </div>
    )
}
export default Footer;