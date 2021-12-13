import React, {useState} from 'react' 
import LogoSvg from '../assets/Splash/logo-black.svg'
import { makeStyles } from '@material-ui/styles'
import {useTheme} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Grid, Link, Slide, useMediaQuery, useScrollTrigger, SwipeableDrawer} from '@material-ui/core'
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
    hamburgerMenu:{

    },
    drawerGrid:{
        
        margin:'15% 0% 0% 0%',
        maxWidth:'100%'
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
    const theme=useTheme()
    const [drawerOpen, setDrawerOpen]=useState(false)
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
            <SwipeableDrawer anchor='top' open={drawerOpen} style={{display:useMediaQuery(theme.breakpoints.up('md'))?'none':true}}>
                <Grid container direction='column' alignItems='center' className={classes.drawerGrid} spacing={2}>
                    {navLinks.map(i=>{
                        return(
                            <Grid item>
                                <Link href={i.route} style={{color:location.pathname===i.route?'#91D873':'inherit', fontSize:'24px'}} onClick={()=>setDrawerOpen(false)}>
                                    {i.text}
                                </Link>
                            </Grid>
                        )
                    })}
                    <Grid item style={{marginTop:'10%'}}>
                        <Button onClick={()=>setDrawerOpen(!drawerOpen)}>
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
            <Grid container direction='row' justify={useMediaQuery(theme.breakpoints.up('md'))?'space-between':'flex-start'} alignItems={useMediaQuery(theme.breakpoints.up('md'))?'baseline':'center'}>
                <Grid item style={{display:useMediaQuery(theme.breakpoints.up('md'))?'none':true, marginLeft:'6%' }} >
                    <Button onClick={()=>setDrawerOpen(!drawerOpen)}>
                        <MenuIcon />
                    </Button>
                </Grid>
                <Grid item style={{marginLeft:useMediaQuery(theme.breakpoints.up('md'))?'4%':'5%'}}>
                    <Button className={classes.logoButton}>
                        <Link href='/' rel='noopener noreferrer' >
                            <img src={LogoSvg} style={{height:"50px",}} alt=''/>
                        </Link>
                    </Button>                
                </Grid>
                <Grid item style={{marginRight:'5%', marginLeft:"5%", display:useMediaQuery(theme.breakpoints.up('md'))?true:'none'}}>
                    <Grid container className={classes.navButton} justify='space-evenly' spacing={5}>
                        {navLinks.map(i=>{
                            return(
                                <Grid item>
                                    <Link href={i.route} style={{color:location.pathname===i.route?'#91D873':'inherit'}} onClick={()=>setDrawerOpen(false)}>
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
