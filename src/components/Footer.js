/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Link } from '@material-ui/core'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import {contentTextStyle, verticalDividerStyle} from '../styles/common.js'

import FooterIcon from '../assets/Splash/logo.svg'


function Footer() {
    return (
        <div className='footer-container' style={{background:"#333336", paddingTop:"120px", paddingBottom:'30px'}}>
            <div className='footer-content' style={{margin:'0% 5%', display:'flex', justifyContent:'space-between'}}>
                <Grid container direction='row' justify='space-between' style={{marginTop:"15px", ...contentTextStyle}}>
                    {/* <Grid item>                        
                    <div className='social-icon-wrapper' style={{display:"flex", justifyContent:"space-between",}}>
                        <div className='social-icon' style={{marginRight:'60px'}}>
                            <TwitterIcon fontSize="large"/>
                        </div>
                        <div className='social-icon' style={{marginRight:'32px'}}>
                            <TelegramIcon fontSize="large"/>
                        </div>
                    </div>
                    </Grid> */}
                    {/* <div className='vertical-divider' style={{...verticalDividerStyle}}/>             */}
                    <Grid item justify='flex-start'>
                    {/* </div> */}
                    {/* <div className='footer-icon-wrapper'> */}
                        <img src={FooterIcon} alt='' style={{maxHeight:"40px", minWidth:"175px"}}/>
                    {/* </div> */}
                    </Grid>
                    <Grid item style={{...contentTextStyle, maxHeight:"24px", marginTop:'25px',  fontSize:'12px'}} >
                        Copyright © Bioeconomy {new Date().getFullYear()}. All rights reserved
                    </Grid>
                    <Grid item justify='flex-end' style={{ marginTop:'25px', fontSize:'12px'}}>
                        <Grid container direction='row' spacing={3}>
                            <Grid item>
                                <Link href='/terms' style={{...linkStyle, marginLeft:'3%'}}>
                                    Terms
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='/privacy' style={{...linkStyle}}>
                                    Privacy Policy
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Footer;

let linkStyle={
    color:'white',
    opacity:'0.8'
}