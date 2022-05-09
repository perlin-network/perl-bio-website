import React from 'react' 
import LogoSvg from '../assets/Splash/logo.svg'
import {Button, Grid, Link, Slide, useScrollTrigger} from '@mui/material'
import { contentTextStyle } from '../styles/common'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    let location=useLocation()
    let trigger=useScrollTrigger()
    let navLinks=[
        {
            route:'/',
            text:'Home'
        },
        {
            route:'/who',
            text:'Who we are'
        },
        {
            route:'/what',
            text:'What we do'
        },
        {
            route:'/contact',
            text:'Contact'
        },
    ]
    return (
        <Slide appear={trigger} direction="down" in={!trigger}>
        <div className='navbar-container' style={{backgroundColor:'#333336', paddingBottom:'25px', mixBlendMode:'pass-through', position:'sticky', top:0, zIndex:1}}>
            <Grid container direction='row' justifyContent='space-between'>
                <Grid item justifyContent='flex-start' style={{marginLeft:'4%'}}>
                    <Button style={{ width:"100%",justifyContent:"flex-start", borderRadius:"16px",  maxWidth:"376px",marginTop:'5%', maxHeight:"83.22px",}}>
                        <Link href='/' rel='noopener noreferrer' >
                            <img src={LogoSvg} style={{height:"83.22px",}} alt=''/>
                        </Link>
                    </Button>                
                </Grid>
                <Grid item justifyContent='flex-end' style={{marginTop:'50px', marginRight:'5%', marginLeft:"5%"}}>
                    <Grid container justifyContent='space-evenly' spacing={5} style={{...contentTextStyle, fontSize:'20px', color:'white'}}>
                        {navLinks.map(i=>{
                            return(
                                <Grid item>
                                    <Link href={i.route} style={{color:location.pathname===i.route?'#91D873':'inherit'}}>
                                        {i.text}
                                    </Link>
                                </Grid>
                            )
                        })}                    
                    </Grid>
                </Grid>
            </Grid>        
        </div>
        </Slide>
    );
}
