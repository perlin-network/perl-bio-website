import React from 'react' 
import LogoSvg from '../assets/Splash/logo-black.svg'
import { makeStyles } from '@material-ui/styles'
import {Button, Grid, Link, Slide, useScrollTrigger} from '@material-ui/core'
import { contentTextStyle } from '../styles/common'
import { useLocation } from 'react-router-dom'

const useStyles=makeStyles({
    root:{
        backgroundColor:'#FFFFFF',
        paddingBottom:'25px',
        mixBlendMode:'pass-through',
        position:'sticky',
        top:0,
        zIndex:1
    },
    logoButton:{
        width:"100%",justifyContent:"flex-start", borderRadius:"16px",  maxWidth:"376px",marginTop:'5%', maxHeight:"83.22px"
    },
    navButton:{
        ...contentTextStyle,
        fontSize:'20px',
        color:'black'
    }
})

export default function Navbar() {
    const classes=useStyles()
    let location=useLocation()
    let trigger=useScrollTrigger()
    let navLinks=[
        {
            route:'/',
            text:'Home'
        },
        {
            route:'/services',
            text:'Services'
        },
        {
            route:'/projects',
            text:'Projects and Press'
        },
        {
            route:'/team',
            text:'Team'
        },
        // {
        //     route:'/media',
        //     text:'Media'
        // },
        {
            route:'/contact',
            text:'Contact'
        },
    ]
    return (
        <Slide appear={trigger} direction="down" in={!trigger}>
        <div className={classes.root}>
            <Grid container direction='row' justify='space-between'>
                <Grid item style={{marginLeft:'4%'}}>
                    <Button className={classes.logoButton}>
                        <Link href='/' rel='noopener noreferrer' >
                            <img src={LogoSvg} style={{height:"50px",}} alt=''/>
                        </Link>
                    </Button>                
                </Grid>
                <Grid item style={{marginTop:'25px', marginRight:'5%', marginLeft:"5%"}}>
                    <Grid container className={classes.navButton} justify='space-evenly' spacing={5}>
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
    )
}
