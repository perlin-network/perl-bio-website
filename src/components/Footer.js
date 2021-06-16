import React from 'react'
import { Grid } from '@material-ui/core'
import {contentTextStyle} from '../styles/common.js'

function Footer() {
    return (
        <div className='footer-container' style={{background:"#333336", paddingTop:"120px", paddingBottom:'30px'}}>
            <div className='footer-content' style={{margin:'0% 5%', display:'flex', justifyContent:'space-between'}}>
                <div className='footer-left-content' style={{justifyContent:'flex-start', ...contentTextStyle}}>
                <Grid container direction='row'>


                </Grid>
                </div>
                <div className='footer-right-content' style={{justifyContent:'flex-end', ...contentTextStyle, fontSize:'12px'}}>
                    Copyright © Bioeconomy {new Date().getFullYear()}. All rights reserved
                </div>
            </div>
            
        </div>
    )
}
export default Footer;