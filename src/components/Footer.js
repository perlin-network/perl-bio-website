/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Link, Divider } from '@material-ui/core'
import {Twitter, LinkedIn, YouTube} from '@material-ui/icons'
import {contentTextStyle} from '../styles/common.js'

import FooterIcon from '../assets/Splash/logo-black.svg'

const useStyles=makeStyles({
    root:{
        background:"#E4EDE8",
        paddingTop:"5%",
        paddingBottom:'30px',
        color:'#333336'
    },
    footerWrapper:{
        margin:'0% 5%',
        display:'flex',
        justifyContent:'space-between'
    },
    link:{
        color:'#333336',
        opacity:0.8
    },
    divider:{
        height:'25px'
    },
    iconLink:{
        color:'#333336',
        opacity:0.8
    },
    footerImg:{
        maxHeight:"40px",
        minWidth:"175px",
        filter:'grayscale(100%)',
        opacity:'0.8'
    }
})

const quickLinks=[
    {
        text:'Services',
        href:'/services'
    },
    {
        text:'Projects & Press',
        href:'/projects'
    },
    {
        text:'Team',
        href:'/about'
    },
    {
        text:'Contact',
        href:'/contact'
    },    
]

const socials=[
    {
        icon:<Twitter/>,
        href:'https://twitter.com/Bioeconomy_co'
    },
    {
        icon:<LinkedIn/>,
        href:'https://www.linkedin.com/company/bioeconomy-co/about/'
    },
    {
        icon:<YouTube/>,
        href:'https://www.youtube.com/channel/UC5V248elOeMQ5eCNtJzHrrw'
    }
]

function Footer() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.footerWrapper}>
                <Grid container direction='row' justify='space-between' alignItems='flex-end' style={{ paddingBottom:'5%'}}>
                    <Grid item>
                        <Grid container direction='column' spacing={1}>
                            <Grid item style={{marginBottom:'15px'}}>
                                Quick Links
                            </Grid>
                            {quickLinks.map(i=>{
                                return(
                                    <Grid item>
                                        <Link className={classes.link} href={i.href}>
                                            {i.text}
                                        </Link>
                                    </Grid>
                                )
                            })}
                            <Grid item style={{marginTop:'15px'}}>
                                <Grid container direction='row' spacing={3}>
                                    {socials.map(i=>{
                                        return(
                                            <Grid item>
                                                <Link className={classes.iconLink} href={i.href}>
                                                    {i.icon}
                                                </Link>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems='center' spacing={2} style={{fontSize:'12px', }}>
                            <Grid item>
                                <Link className={classes.link} href='/terms'>
                                    Terms of Use
                                </Link>
                            </Grid>
                            <Grid item>
                                <Divider className={classes.divider} orientation='vertical'/>
                            </Grid>
                            <Grid item>
                                <Link className={classes.link} href='/privacy'>
                                    Privacy Policy
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' alignItems='center' >
                            <Grid item>
                                <img className={classes.footerImg} src={FooterIcon} alt='footer'/>
                            </Grid>
                            <Grid item style={{marginTop:'25px', fontSize:'12px'}}>
                                Copyright © Bioeconomy {new Date().getFullYear()}. All rights reserved
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Footer;